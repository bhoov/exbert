import * as d3 from "d3";
import * as R from "ramda"
import * as _ from "lodash"
import { VComponent } from "./VisComponent";
import { SimpleEventHandler } from "../etc/SimpleEventHandler";
import { D3Sel } from "../etc/Util";
import * as tp from "../etc/types"

type infoEventFromI = (sel: D3Sel, i: number) => tp.TokenEvent
type infoEmbeddingEventFromI = (sel: D3Sel, i: number, embed: number[]) => tp.TokenEmbeddingEvent

export abstract class TextTokens extends VComponent<tp.FullSingleTokenInfo[]>{

    abstract css_name: string
    abstract hover_css_name: string
    abstract side: tp.SideOptions
    eInfo: infoEventFromI = (sel, i) => { return { sel: sel, side: this.side, ind: i } }
    eEmbedding: infoEmbeddingEventFromI = (sel, i, embed) => { return { sel: sel, side: this.side, ind: i, embeddings: embed } }
    divHover: D3Sel

    static events = {
        tokenMouseOver: "TextToken_TokenMouseOver",
        tokenMouseOut: "TextToken_TokenMouseOut",
        tokenClick: "TextToken_TokenClick",
        tokenDblClick: "TextToken_TokenDblClick",
    };

    data: tp.FullSingleTokenInfo[];

    _current: {};

    options = {
        boxheight: 26,
        offset: 0,
        divHover: {
            width: 150,
            height: 150,
            offset: [3, 3],
            textInfo: "Would predict..."
        },
    };

    textBoxes: D3Sel

    constructor(d3Parent: D3Sel, eventHandler?: SimpleEventHandler, options: {} = {}) {
        super(d3Parent, eventHandler);
        this.superInitHTML(options);
    }

    mask(maskInds: number[]) {
        this.parent.selectAll(`.${this.css_name}`)
            .each((d, i, n) => {
                const sel = d3.select(n[i])
                sel.classed("masked-token", _.includes(maskInds, i))
            })
    }

    getEmbedding(ind: number): tp.FullSingleTokenInfo {
        return this._data[ind]
    }

    _init() { }

    _wrangle(data: tp.FullSingleTokenInfo[]) {
        this.data = this._data;
        return this._data;
    }

    _divPlacement() {
        const getBaseX = () => (<HTMLElement>self.base.node()).getBoundingClientRect().left
        const getBaseY = () => (<HTMLElement>self.base.node()).getBoundingClientRect().top
        const self = this
        const op = this.options
        const mouse = d3.mouse(self.base.node())
        const divOffset = [3, 3]
        const left = mouse[0] + getBaseX() - (op.divHover.width + divOffset[0])
        const top = mouse[1] + getBaseY() + divOffset[1]
        return [left, top]
    }

    _render(data: tp.FullSingleTokenInfo[]) {
        const op = this.options;
        const self = this;
        // Reset token display
        this.base.selectAll("*").remove()

        this.divHover = this.base.append('div')
            .classed('tok-info', true)
            .classed('mat-hover-display', true)
            .classed(this.hover_css_name, true)
            .style('width', String(this.options.divHover.width) + 'px')
            .style('height', String(this.options.divHover.height) + 'px')

        this.divHover
            .append('p')
            .classed('p-info', true)
            .style('font-weight', 'bold')
            .text(op.divHover.textInfo)


        // Add blank divs
        console.log(`Internal offset (${this.side}): `, op.offset);
        const blankDivs = this.base.selectAll(`.blank-text-box`)

        blankDivs.data(R.range(0, op.offset))
            .join("div")
            .classed("blank-text-box", true)
            .classed("token", true)
            .style("height", op.boxheight + 'px')
            .text((d) => "  ")

        // Render normal text box data
        self.textBoxes = <D3Sel>this.base.selectAll(`.${this.css_name}`)
            .data(data)
            .join("div")
            .attr("class", (d, i) => `token ${this.css_name} token-${i}`)
            .attr("id", (d, i) => `${this.css_name}-${i}`)
            .style('height', op.boxheight + 'px')
            .text((d) => {
                return d.text.replace("\u0120", " ").replace("\u010A", "\\n")
            })
            .on('mouseover', function (d, i) {
                const sel = d3.select(this);
                sel.style('background', 'lightblue');
                self.eventHandler.trigger(TextTokens.events.tokenMouseOver, self.eInfo(sel, i))
                self.divHover.style('visibility', 'visible')
            })
            .on('mouseout', function (d, i) {
                let sel = d3.select(this);
                sel.style('background', 0)
                self.eventHandler.trigger(TextTokens.events.tokenMouseOut, self.eInfo(sel, i))
                self.divHover.style('visibility', 'hidden')
            })
            .on('mousemove', function (d, i) {
                const s = d3.select(this)
                const [left, top] = self._divPlacement()

                self.divHover
                    .style('left', String(left) + 'px')
                    .style('top', String(top) + 'px')
                    .selectAll(".topk-word-box")
                    //@ts-ignore
                    .data(d3.zip(d.topk_words, d.topk_probs))
                    .join('p')
                    .classed("topk-word-box", true)
                    .text(w => {
                        const name = w[0].replace(/\u0120/g, " ").replace(/\u010A/g, "\\n")
                        const prob = w[1].toFixed(2)
                        return name + ": " + prob
                    })
            })

        self.addClick(self.textBoxes)
    }

    addClick(textboxes: D3Sel) {
        const self = this;

        self.textBoxes = textboxes
            .on('click', (d, i, n) => {
                const sel = d3.select(n[i]);
                self.eventHandler.trigger(TextTokens.events.tokenClick, self.eEmbedding(sel, i, d.embeddings))
            })
            .on('dblclick', (d, i, n) => {
                const sel = d3.select(n[i]);
                self.eventHandler.trigger(TextTokens.events.tokenDblClick, self.eInfo(sel, i))
            });
    }
}

export class LeftTextToken extends TextTokens {

    css_name = 'left-token';
    hover_css_name = 'left-token-hover'
    side: tp.SideOptions = 'left';
    offset: number = 1;

    constructor(d3Parent: D3Sel, eventHandler?: SimpleEventHandler, options: {} = {}) {
        super(d3Parent, eventHandler);
    }


}

export class RightTextToken extends TextTokens {
    css_name = 'right-token';
    hover_css_name = 'right-token-hover'
    side: tp.SideOptions = 'right'
    offset: number = 0;

    constructor(d3Parent: D3Sel, eventHandler?: SimpleEventHandler, options: {} = {}) {
        super(d3Parent, eventHandler);
    }

    _divPlacement() {
        const getBaseX = () => (<HTMLElement>self.base.node()).getBoundingClientRect().left
        const getBaseY = () => (<HTMLElement>self.base.node()).getBoundingClientRect().top
        const self = this
        const op = this.options
        const mouse = d3.mouse(self.base.node())
        const divOffset = [3, 3]
        const left = mouse[0] + getBaseX() + divOffset[0]
        const top = mouse[1] + getBaseY() + divOffset[1]
        return [left, top]
    }
}
