import * as d3 from "d3";
import * as _ from "lodash"
import {VComponent} from "./VisComponent";
import {SimpleEventHandler} from "../etc/SimpleEventHandler";
import {D3Sel} from "../etc/Util";
import * as tp from "../etc/types"

type infoEventFromI = (i:number) => tp.TokenEvent
type infoEmbeddingEventFromI = (i:number, embed:number[]) => tp.TokenEmbeddingEvent

export abstract class TextTokens extends VComponent<tp.FullSingleTokenInfo[]>{

    abstract css_name: string
    abstract side: tp.SideOptions
    eInfo:infoEventFromI = (i) => {return {side: this.side, ind: i}}
    eEmbedding:infoEmbeddingEventFromI = (i, embed) => {return {side: this.side, ind: i, embeddings: embed}}

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
    };
    totalHeight: number;

    constructor(d3Parent: D3Sel, eventHandler?:SimpleEventHandler, options: {} = {}) {
        super(d3Parent, eventHandler);
        this.superInitHTML(options);
    }

    mask(maskInds:number[]) {
        this.parent.selectAll(`.${this.css_name}`)
            .each((d,i,n) => {
                const sel = d3.select(n[i])
                sel.classed("masked-token", _.includes(maskInds, i))
        })
    }

    getEmbedding(ind:number):tp.FullSingleTokenInfo {
        return this._data[ind]
    }

    _init() {}

    _wrangle(data: tp.FullSingleTokenInfo[]) {
        this._data = data;
        this.data = data;
        this.totalHeight = this.options.boxheight * data.length;
        return data;
    }

    _render(data:tp.FullSingleTokenInfo[]) {
        const op = this.options;
        const self = this;

        const textBoxes = <D3Sel>this.base.selectAll(`.${this.css_name}`)
            .data(data)
            .join("div")
            .attr("class", (d, i) => `token ${this.css_name} token-${i}`)
            .attr("id", (d, i) => `${this.css_name}-${i}`)
            .style('height', op.boxheight + 'px')
            .text((d) => {return d.text})
            .on('mouseover', function(d, i) {
                const sel = d3.select(this);
                sel.style('background', 'lightblue');
                self.eventHandler.trigger(TextTokens.events.tokenMouseOver, self.eInfo(i))
            })
            .on('mouseout', function(d, i) {
                let sel = d3.select(this);
                sel.style('background', 0)
                self.eventHandler.trigger(TextTokens.events.tokenMouseOut, self.eInfo(i))
            })
            .on('click', (d, i, n) => {
                const sel = d3.select(n[i]);
                self.eventHandler.trigger(TextTokens.events.tokenClick, self.eEmbedding(i, d.embeddings))
            })
            .on('dblclick', (d, i, n) => {
                const sel = d3.select(n[i]);
                sel.classed("masked-token", !sel.classed("masked-token"));
                self.eventHandler.trigger(TextTokens.events.tokenDblClick, self.eInfo(i))
            });
    }
}

export class LeftTextToken extends TextTokens {

    css_name = 'left-token';
    side:tp.SideOptions = 'left'

    constructor(d3Parent: D3Sel, eventHandler?:SimpleEventHandler, options: {} = {}) {
        super(d3Parent, eventHandler);
    }


}

export class RightTextToken extends TextTokens {
    css_name = 'right-token';
    side:tp.SideOptions = 'right'

    constructor(d3Parent: D3Sel, eventHandler?:SimpleEventHandler, options: {} = {}) {
        super(d3Parent, eventHandler);
    }
}
