import * as d3 from "d3";
import { VComponent } from "./VisComponent";
import { SimpleEventHandler } from "../etc/SimpleEventHandler";
import { D3Sel } from "../etc/Util";
import { SVG } from "../etc/SVGplus"
import * as tf from '@tensorflow/tfjs'
import { Tensor3D } from "@tensorflow/tfjs";

// The below two (interface and function) can become a class
export type AttentionHeadBoxI = {
    rows: number[][],
    labels: number[],
    max: number,
}

/**
 * From an attention matrix selected by layer, show a summary of the attentions belonging to each head.
 * 
 * @param headMat The matrix representing all the attentions by head (layer already selected) <head, from, to>
 * @param headList The heads that are selected
 * @param side Is this the right or the left display?
 * @param tokenInd If not null, select just the information from a single token across heads
 * @returns Information needed to label the headbox
 */
export function getAttentionInfo(headMat: number[][][], headList: number[], side: "right" | "left" = "left", token: null | {ind: number, side: "left" | "right"}=null): AttentionHeadBoxI {
    // Collect only from headlist, average each head, transpose to ease iteration
    if (headList.length == 0) {
        return {
            rows: [[]],
            labels: [],
            max: 0,
        }
    }

    let dim = null
    // Only change the attention graph opposite selected token
    if (token != null && (token.side != side)) {
        dim = token.side == "left" ? -2 : -1 // Assign to "from" direction if "left" 
    }

    let axis: number = side == "left" ? 2 : 1;

    // average across the axis representing the attentions.
    let gatheredMat = tf.tensor3d(headMat)
    if (dim != null) {
        gatheredMat = gatheredMat.gather([token.ind], dim)
    }
    let newMat = gatheredMat.gather(headList, 0).mean([axis]).transpose();

    const rowInfo = <number[][]>newMat.arraySync();

    const out: AttentionHeadBoxI = {
        rows: rowInfo,
        labels: headList,
        max: <number>newMat.max().arraySync(),
    }

    return out
}

interface CurrentOptions {
    headHeight: number
    headWidth: number
    xPad: number
    yPad: number
    boxWidth: number
    totalWidth: number
    totalHeight: number
};

export class AttentionHeadBox extends VComponent<AttentionHeadBoxI>{
    css_name = '';
    rowCssName = 'att-head';
    boxCssName = 'att-rect';

    static events = {
        rowMouseOver: "AttentionHeadBox_RowMouseOver",
        rowMouseOut: "AttentionHeadBox_RowMouseOut",
        boxMouseOver: "AttentionHeadBox_BoxMouseOver",
        boxMouseOut: "AttentionHeadBox_BoxMouseOut",
        boxMouseMove: "AttentionHeadBox_BoxMouseMove",
        boxClick: "AttentionHeadBox_BoxClick",
    };

    _data: AttentionHeadBoxI;

    _current: Partial<CurrentOptions> = {}

    options = {
        boxDim: 26,
        yscale: 1, // Amount to scale boxheight to get individual heads
        xscale: 0.5, // Amount to scale boxwidth to get individual heads
        side: "left",
        maxWidth: 200, // Maximum width of SVG
        offset: 0, // 1 if for autoregressive models
    };

    // D3 Components
    headRows: D3Sel;
    headCells: D3Sel;
    opacityScale: d3.ScaleLinear<any, any>;

    constructor(d3Parent: D3Sel, eventHandler?: SimpleEventHandler, options: {} = {}) {
        super(d3Parent, eventHandler);
        this.superInitSVG(options);
        this._init()
    }

    _init() {
        this.headRows = this.base.selectAll(`.${this.rowCssName}`)
        this.headCells = this.headRows.selectAll(`${this.boxCssName}`)
        this.opacityScale = d3.scaleLinear().range([0, 1]);
    }

    private updateCurrent(): Partial<CurrentOptions> {
        const op = this.options
        const cur = this._current

        const nHeads = this._data.rows[0].length
        const baseHeadWidth = op.boxDim * op.xscale

        // Scale headwidth according to maximum width
        const getHeadScale = (nH) => (Math.min(op.maxWidth / nH, baseHeadWidth) / baseHeadWidth) * op.xscale;

        cur.headHeight = op.boxDim * op.yscale;
        cur.headWidth = getHeadScale(nHeads) * op.boxDim;
        cur.xPad = cur.headWidth;
        cur.yPad = (op.boxDim - cur.headHeight) / 2;

        const getBoxWidth = (headWidth) => {
            const maxBwidth = 100;
            const bwidth = this._data.rows[0].length * cur.headWidth
            const scale = d3.scaleLinear
            if (bwidth > maxBwidth) {
                return
            }

        }

        cur.boxWidth = (this._data.rows[0].length * cur.headWidth);
        cur.totalWidth = (2 * cur.xPad) + cur.boxWidth;
        cur.totalHeight = (op.boxDim * (this._data.rows.length + op.offset));

        return this._current
    }

    private updateData() {
        const op = this.options;
        const self = this;
        const boxEvent = (i) => { return { ind: i, side: op.side, head: self._data.labels[i] } }
        const cur = this.updateCurrent()

        const getBaseX = () => (<HTMLElement>self.base.node()).getBoundingClientRect().left
        const getBaseY = () => (<HTMLElement>self.base.node()).getBoundingClientRect().top

        this.base.html('');

        this.parent
            .attr("width", cur.totalWidth)
            .attr("height", cur.totalHeight)

        this.headRows = this.base.selectAll(`.${self.rowCssName}`)
            .data(self._data.rows)
            .join("g")
            .attrs({
                class: (d, i) => `${self.rowCssName} ${self.rowCssName}-${i}`,
                transform: (d, i) => {
                    return SVG.translate(
                        {
                            x: cur.xPad,
                            y: (op.boxDim * (i + op.offset)) + cur.yPad,
                        })
                },
                width: cur.boxWidth,
                height: cur.headHeight,

            })
            .on("mouseover", (d, i) => {
                self.eventHandler.trigger(AttentionHeadBox.events.rowMouseOver, { ind: i, side: op.side })
            })
            .on("mouseout", (d, i) => {
                self.eventHandler.trigger(AttentionHeadBox.events.rowMouseOut, { ind: i, side: op.side })
            })

        this.headCells = this.headRows
            .selectAll(`${this.boxCssName}`)
            .data(d => d)
            .join('rect')
            .attrs({
                x: (d, i) => i * cur.headWidth,
                y: 0,
                class: this.boxCssName,
                head: (d, i) => self._data.labels[i],
                width: cur.headWidth,
                height: cur.headHeight,
                opacity: (d: number) => this.opacityScale(d),
                fill: "blue"
            })
            .on("mouseover", (d, i) => {
                self.eventHandler.trigger(AttentionHeadBox.events.boxMouseOver, boxEvent(i))
            })
            .on("mouseout", (d, i) => {
                self.eventHandler.trigger(AttentionHeadBox.events.boxMouseOut, boxEvent(i))
            })
            .on("click", (d, i) => {
                self.eventHandler.trigger(AttentionHeadBox.events.boxClick, boxEvent(i))
            })
            .on("mousemove", function(d, i) {
                const op = self.options
                const mouse = d3.mouse(self.base.node())

                self.eventHandler.trigger(AttentionHeadBox.events.boxMouseMove, { ind: i, side: op.side, baseX: getBaseX(), baseY: getBaseY(), mouse: mouse })

            })
            .append("svg:title")
            .text((d, i) => "Head " + (self._data.labels[i] + 1))
    }


    _wrangle(data: AttentionHeadBoxI) {
        this._data = data;
        this.opacityScale = this.opacityScale.domain([0, data.max])
        return data;
    }

    _render(data: AttentionHeadBoxI) {
        this.updateData();
    }
}