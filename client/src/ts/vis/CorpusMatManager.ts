import * as d3 from 'd3'
import * as R from 'ramda'
import * as tp from '../etc/types'
import { D3Sel } from '../etc/Util'
import { VComponent } from '../vis/VisComponent'
import { SimpleEventHandler } from "../etc/SimpleEventHandler";
import { SVG } from "../etc/SVGplus"
import { spacyColors } from "../etc/SpacyInfo"
import "../etc/xd3"

// Need additoinal height information to render boxes
interface BaseDataInterface extends tp.FaissSearchResults {
    height: number
}
type DataInterface = BaseDataInterface[]

interface ColorMetaBaseData {
    pos: string
    dep: string
    is_ent: boolean
    token: string
}

type DisplayOptions = "pos" | "dep" | "ent"

function managerData2MatData(dataIn: DataInterface, indexOffset = 0, toPick = ['pos']) {

    const outOfRangeObj: ColorMetaBaseData = {
        pos: null,
        dep: null,
        is_ent: null,
        token: null,
    }

    const chooseProps = R.pick(toPick)

    const dataOut = dataIn.map(d => {
        const wordIdx = d.index + indexOffset;
        if ((wordIdx < 0) || (wordIdx >= d.tokens.length)) {
            return R.assoc('height', d.height, outOfRangeObj)
        }

        const newObj = chooseProps(d.tokens[wordIdx])

        return R.assoc('height', d.height, newObj)
    })

    return dataOut
}


export class CorpusMatManager extends VComponent<DataInterface>{
    css_name = 'corpus-mat-container'
    options = {
        cellWidth: 10,
        toPick: ['pos'],
        idxs: [-1, 0, 1],
        divHover: {
            width: 60,
            height: 40 
        }
    }

    static events = {
        mouseOver: "CorpusMatManager_MouseOver",
        mouseOut: "CorpusMatManager_MouseOut",
        click: "CorpusMatManager_Click",
        dblClick: "CorpusMatManager_DblClick",
        rectMouseOver: "CorpusMatManager_RectMouseOver",
        rectMouseOut: "CorpusMatManager_RectMouseOut",
        rectClick: "CorpusMatManager_RectClick",
        rectDblClick: "CorpusMatManager_RectDblClick",
    }

    // The d3 components that are saved to make rendering faster
    corpusMats: D3Sel
    rowGroups: D3Sel
    divHover: D3Sel

    _current = {}
    rowCssName = 'index-match-results'
    cellCssName = 'index-cell-result'

    _data: DataInterface

    static colorScale: tp.ColorMetaScale = spacyColors.colorScale;

    // Selections
    constructor(d3parent: D3Sel, eventHandler?: SimpleEventHandler, options = {}) {
        super(d3parent, eventHandler)
        this.idxs = [-1, 0, 1];
        this.superInitHTML(options)
        this._init()
    }

    get idxs() {
        return this.options.idxs;
    }

    set idxs(val: number[]) {
        this.options.idxs = val
    }

    // Use this to create static dom elements
    _init() {
        const self = this;
        this.corpusMats = this.base.selectAll('.corpus-mat')
        this.rowGroups = this.corpusMats.selectAll(`.${this.rowCssName}`)
        this.divHover = this.base.append('div')
            .classed('mat-hover-display', true)
            .classed('text-center', true)
            .style('width', String(this.options.divHover.width) + 'px')
            .style('height', String(this.options.divHover.height) + 'px')

        this.divHover.append('p')
    }

    pick(val: DisplayOptions) {
        this.options.toPick = [val]
        this.redraw()
    }

    addRight() {
        const addedIdx = R.last(this.idxs) + 1;
        this.idxs.push(addedIdx)
        this.addCorpusMat(addedIdx, "right")
    }

    addLeft() {
        const addedIdx = this.idxs[0] - 1;
        const addDecrementedHead: (x: number[]) => number[] = x => R.insert(0, R.head(x) - 1)(x)
        this.idxs = addDecrementedHead(this.idxs)
        this.addCorpusMat(addedIdx, "left")
    }

    killRight() {
        this.kill(Math.max(...this.idxs))
    }

    killLeft() {
        this.kill(Math.min(...this.idxs))
    }

    /**
     * Remove edge value from contained indexes
     *
     * @param d Index to remove
     */
    kill(d: number) {
        if (d != 0) {
            if (d == Math.min(...this.idxs) || d == Math.max(...this.idxs)) {
                this.idxs = R.without([d], this.idxs)
                this.base.selectAll(`.offset-${d}`).remove()
            }
        }
    }

    _wrangle(data: DataInterface) {
        return data
    }

    data(val?: DataInterface) {
        if (val == null) {
            return this._data;
        }

        this._data = val;
        this._updateData();
        return this;
    }

    /**
     * The main rendering code, called whenever the data changes.
     */
    private _updateData() {
        const self = this;
        const op = this.options;

        this.base.selectAll('.corpus-mat').remove()

        this.idxs.forEach((idxOffset, i) => {
            self.addCorpusMat(idxOffset)
        })
    }

    /**
     * Add another word's meta information matrix column to either side of the index
     *
     * @param idxOffset Distance of word from matched word in the sentence
     * @param toThe Indicates adding to the "left" or to the "right" of the index
     */
    addCorpusMat(idxOffset: number, toThe: "right" | "left" = "right") {
        const self = this;
        const op = this.options;
        const boxWidth = op.cellWidth * op.toPick.length;
        const boxHeight = R.sum(R.map(R.prop('height'), this._data))

        let corpusMat;

        if (toThe == "right") {
            corpusMat = this.base.append('div')
        }
        else if (toThe == "left") {
            corpusMat = this.base.insert('div', ":first-child")
        }
        else {
            throw Error("toThe must have argument of 'left' or 'right'")
        }

        corpusMat = corpusMat
            .data([idxOffset])
            .attr('class', `corpus-mat offset-${idxOffset}`)
            .attr('offset', idxOffset)
            .append('svg')
            .attrs({
                width: boxWidth,
                height: boxHeight,
            })
            .on('mouseover', function (d, i) {
                self.eventHandler.trigger(CorpusMatManager.events.mouseOver, { idx: i, offset: d, val: self.options.toPick[0] })
            })
            .on('mouseout', (d, i) => {
                this.eventHandler.trigger(CorpusMatManager.events.mouseOut, { idx: i, offset: d })
            })

        this.addRowGroup(corpusMat)
    }

    /**
     *
     * @param mat The base div on which to add matrices and rows
     */
    addRowGroup(mat: D3Sel) {
        const self = this;
        const op = this.options;

        const heights = R.map(R.prop('height'), this._data)

        const [heightSum, rawHeightList] = R.mapAccum((x, y) => [R.add(x, y), R.add(x, y)], 0, heights)
        const fixList: (x: number[]) => number[] = R.compose(R.dropLast(1),
            // @ts-ignore
            R.prepend(0)
        )
        const heightList = fixList(rawHeightList)

        const rowGroup = mat.selectAll(`.${self.rowCssName}`)
            .data(d => managerData2MatData(self._data, d, op.toPick))
            .join("g")
            .attr("class", (d, i) => {
                return `${self.rowCssName} ${self.rowCssName}-${i}`
            })
            .attr("row-num", (d,i) => i)
            .attr("height", d => d.height)
            .attr("transform", (d, i) => {
                const out = SVG.translate({
                    x: 0,
                    y: heightList[i],
                })
                return out
            })

        op.toPick.forEach(prop => {
            self.addRect(rowGroup, 0, prop)
        })
    }

    addRect(g: D3Sel, xShift: number, prop: string) {
        const self = this
        const op = this.options

        const rects = g.append('rect')
            .attrs({
                width: op.cellWidth,
                height: d => d.height - 3,
                transform: (d, i) => {
                    return SVG.translate({
                        x: xShift,
                        y: 1.5,
                    })
                },
            })
            .style('fill', d => CorpusMatManager.colorScale[prop](d[prop]))

        
        const getBaseX = () => (<HTMLElement>self.base.node()).getBoundingClientRect().left
        const getBaseY = () => (<HTMLElement>self.base.node()).getBoundingClientRect().top

        g.on('mouseover', function (d, i) {
                self.divHover.style('visibility', 'visible')
                // Get offset
                const col = d3.select(this.parentNode.parentNode) // Column
                const offset = +col.attr('offset')
                self.eventHandler.trigger(CorpusMatManager.events.rectMouseOver, {idx: i, offset: offset})
            })
            .on('mouseout', function (d, i) {
                self.divHover.style('visibility', 'hidden')
                const col = d3.select(this.parentNode.parentNode) // Column
                const offset = +col.attr('offset')
                self.eventHandler.trigger(CorpusMatManager.events.rectMouseOut, {idx: i, offset: offset})
            })
            .on('mousemove', function(d, i) {
                const mouse = d3.mouse(self.base.node())
                const divOffset = [3, 3]
                const left = mouse[0] + getBaseX() - (op.divHover.width + divOffset[0])
                const top = mouse[1] + getBaseY() - (op.divHover.height + divOffset[1])
                self.divHover
                    .style('left', String(left) + 'px')
                    .style('top', String(top) + 'px')
                    .selectAll('p')
                    .text(d[prop])
            })
    }

    /**
     * @param data Data to display
     */
    _render(data: DataInterface) {
        this._updateData();
    }

}
