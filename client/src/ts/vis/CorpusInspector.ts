import * as d3 from "d3";
import * as R from 'ramda'
import 'd3-selection-multi'
import {d3S, D3Sel} from "../etc/Util";
import { VComponent } from "./VisComponent";
import { SimpleEventHandler } from "../etc/SimpleEventHandler";
import * as tp from "../etc/types"
import '../etc/xd3'

// Helpers
const currMatchIdx = (elem) => +(<Element>elem.parentNode).getAttribute('matchidx')
const currRowNum = (elem) => +(<Element>elem.parentNode).getAttribute('rownum')
const backgroundColor = x => `rgba(0, 0, 255, ${0.6*x})`

export class CorpusInspector extends VComponent<tp.FaissSearchResults[]>{
    css_name = 'corpus-inspector';
    _current: {};

    _data: tp.FaissSearchResults[]; // The passed data

    static events = {
        rowMouseOver: "CorpusInspector_rowMouseOver",
        rowMouseOut: "CorpusInspector_rowMouseOut",
        rowClick: "CorpusInspector_rowClick",
        rowDblClick: "CorpusInspector_rowDblClick",
        cellMouseOver: "CorpusInspector_cellMouseOver",
        cellMouseOut: "CorpusInspector_cellMouseOut",
        cellClick: "CorpusInspector_cellClick",
        cellDblClick: "CorpusInspector_cellDblClick",
    }

    options = {}

    // COMPONENTS
    inspectorRows: D3Sel
    inspectorCells: D3Sel
    scaler = d3.scalePow().range([0,0.9]).exponent(2)

    constructor(d3Parent: D3Sel, eventHandler?:SimpleEventHandler, options: {} = {}) {
        super(d3Parent, eventHandler)
        this.superInitHTML(options)
        this._init()
    }

    private createRows() {
        const data = this._data

        this.inspectorRows = this.base.selectAll(".inspector-row")
            .data(data)
            .join('div')
            .classed('inspector-row', true)
            .attrs({
                matchIdx: d => d.index,
                rowNum: (d, i) => i,
            })
            .on("mouseover", (d, i) => {
              this.eventHandler.trigger(CorpusInspector.events.rowMouseOver, {})
            })
    }

    private addTooltip() {
        this.inspectorCells = this.inspectorCells
            .classed('celltooltip', true)
            .append('span')
            .classed('tooltiptext', true)
            .html((d, i, n) => {
                const entityStr = d.is_ent ? "<br>Entity" : ""
                const att = (<Element>n[i].parentNode).getAttribute('att').slice(0, 7)
                const attStr = `<br>Attention: ${att}`

                return `POS: ${d.pos.toLowerCase()}<br>DEP: ${d.dep.toLowerCase()}` + entityStr + attStr
            })
    }

    private createCells() {
        const self = this

        this.inspectorCells = this.inspectorRows.selectAll('.inspector-cell')
            .data((d:tp.FaissSearchResults) => d.tokens)
            .join('div')
            .classed('inspector-cell', true)
            .attr('index-offset', (d, i, n:HTMLElement[]) => {
                const matchIdx = currMatchIdx(n[i])
                return i - matchIdx 
            })
            .attrs({
                pos: d => d.pos.toLowerCase(),
                dep: d => d.dep.toLowerCase(), 
                is_ent: d => d.is_ent
            })
            .text(d => d.token)
            .classed('matched-cell', d => d.is_match)

        // Highlight the cells appropriately
        this.inspectorCells.each((d,i,n) => {
            const idx = currMatchIdx(n[i])
            if (i == idx) {
                const att = d.inward
                const maxAtt = +d3.max(att)
                const currRow = currRowNum(n[i])
                const scaler = self.scaler.domain([0, maxAtt])

                d3.selectAll(`.inspector-row[rownum='${currRow}']`)
                    .selectAll(`.inspector-cell`)
                    .style('background', (d, i) => {
                        return backgroundColor(scaler(att[i]))
                    })
                    .attr('att', (d, i) => att[i])
            }
        })

        self.addTooltip()
    }

    private updateData() {
        this.createRows()
        this.createCells()
    }

    _init() {}

    _wrangle(data: tp.FaissSearchResults[]) {
        this._data = data
        return data;
    }

    _render(data: tp.FaissSearchResults[]) {
        // Remember that this._data is defined in wrangle which should always be called before render
        // as is defined in the update function
        this.updateData()
    }
}