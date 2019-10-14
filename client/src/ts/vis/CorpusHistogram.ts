import {VComponent} from './VisComponent'
import {spacyColors} from '../etc/SpacyInfo'
import {SVG} from '../etc/SVGplus'
import * as d3 from 'd3'
import * as R from 'ramda'
import { D3Sel } from '../etc/Util';
import { SimpleEventHandler } from '../etc/SimpleEventHandler';

interface MarginInfo {
    top: number,
    bottom: number,
    right: number,
    left: number
}

// Dependent on the options in the response
type MatchedMetaSelections = "pos" | "dep" | "ent"

interface MatchedMetaCount {
    pos: number
    dep: number
    is_ent: number
}

interface MaxAttMetaCount {
    offset: number
}

type MatchedDataInterface = MatchedMetaCount
type MaxAttDataInterface = MaxAttMetaCount
type DataInterface = MatchedDataInterface | MaxAttDataInterface

interface CountedHist {
    label: string,
    count: number
}

type RenderDataInterface = CountedHist[]


/**
 *  Data formatting functions
 */
const toRenderData = (obj: {[s: string]: number}): RenderDataInterface => Object.keys(obj).map((k, i) => {
    return {label: k, count: obj[k]}
})

const toStringOrNum = (a:string) => {
    const na = +a
    if (isNaN(na)) {
        return a
    }
    return na
}

const sortByLabel = R.sortBy(R.compose(toStringOrNum, R.prop('label')))
const sortByCount = R.sortBy(R.prop('count'))

const toOrderedRender = R.compose(
    R.reverse,
    // @ts-ignore -- TODO: fix
    sortByCount,
    toRenderData
)

export class CorpusHistogram<T> extends VComponent<T> {

    css_name = ''

    static events = {}

    _current = {
        chart: {
            height: null,
            width: null
        }
    }

    // D3 COMPONENTS
    svg: D3Sel

    options: {
        margin: MarginInfo
        barWidth: number
        width: number
        height: number
        val: string
        xLabelRot: number
        xLabelOffset: number
        yLabelOffset: number
    }

    axes = {
        x: d3.scaleBand(),
        y: d3.scaleLinear(),
    }


    constructor(d3parent: D3Sel, eventHandler?: SimpleEventHandler, options={}) {
        super(d3parent, eventHandler)
        this.options = {
            margin: {
                top: 10,
                right: 30,
                bottom: 30,
                left: 40
            },
            barWidth: 25,
            width: 185,
            height: 200,
            val: "pos", // Change Default, pass through constructor
            xLabelRot: 45,
            xLabelOffset: 15,
            yLabelOffset: 5,

        }
        this.superInitSVG()
    }

    meta():MatchedMetaSelections
    meta(val:MatchedMetaSelections): this
    meta(val?) {
        if (val == null) {
            return this.options.val;
        }

        this.options.val = val;
        this.update(this._data)

        return this;
    }

    _init() {}

    private createXAxis() {
        const self = this;
        const op = this.options;
        const width = op.width - op.margin.left - op.margin.right

        this.axes.x
            .domain(R.map(R.prop('label'), self.renderData))
            .rangeRound([0, width])
            .padding(0.1)

        this._current.chart.width = width;
    }

    private createYAxis() {
        const self = this;
        const op = this.options;
        const height = op.height - op.margin.top - op.margin.bottom

        this.axes.y
            .domain([0, +d3.max(R.map(R.prop('count'), self.renderData))])
            .rangeRound([height, 0])

        this._current.chart.height = height;
    }

    private createAxes() {
        this.createXAxis()
        this.createYAxis()
    }

    _wrangle(data: DataInterface) {
        const out = data[this.options.val]
        return toOrderedRender(out)
    }

    width():number
    width(val:number):this
    width(val?) {
        if (val == null) {
            return this.options.width;
        }
        this.options.width = val;
        this.updateWidth();
        this.createXAxis();
        return this;
    }

    height():number
    height(val:number):this
    height(val?) {
        if (val == null) {
            return this.options.height;
        }

        this.options.height = val;
        this.updateHeight();
        this.createYAxis();
        return this;
    }

    private updateWidth() {
        this.svg.attr('width', this.options.width)
    }

    private updateHeight() {
        this.svg.attr('height', this.options.height)
    }

    private figWidth(data: RenderDataInterface) {
        const op = this.options;
        return (data.length * op.barWidth) + op.margin.left + op.margin.right
    }

    _render(data:RenderDataInterface) {
        const self = this;
        const op = this.options;
        const curr = this._current;

        this.parent.html('')
        this.svg = this.parent

        this.createAxes();
        this.width(this.figWidth(data));
        this.updateHeight();

        // Initialize axes
        const g = self.svg.append("g")
            .attr("transform", SVG.translate({x: op.margin.left, y:op.margin.top}))

        // Hack to allow clearing this histograms to work
        self.base = g

        // Fix below for positional changing
            const axisBottom = g.append("g")
                .attr("transform", SVG.translate({x: 0, y:curr.chart.height}))
                .call(d3.axisBottom(self.axes.x))

            if (op.val != "offset") {
                axisBottom
                    .selectAll("text")
                    .attr("y", op.yLabelOffset)   // Move below the axis
                    .attr("x", op.xLabelOffset)  // Offset to the right a bit
                    .attr("transform", SVG.rotate(op.xLabelRot))
            }

            g.append("g")
                .call(d3.axisLeft(self.axes.y))

        g.selectAll(".bar")
          .data(data)
          .join('rect')
            .attr("class", "bar")
            .attr("x", function(d) { return self.axes.x(d.label); })
            .attr("y", function(d) { return self.axes.y(d.count); })
            .attr("width", self.axes.x.bandwidth())
            .attr("height", function(d) { return curr.chart.height - self.axes.y(d.count); })
            .style('fill', k => spacyColors.colorScale[op.val](k.label))
    }
}
