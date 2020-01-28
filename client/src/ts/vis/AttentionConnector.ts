import * as d3 from "d3";
import 'd3-selection-multi'
import { D3Sel } from "../etc/Util";
import { Edge, EdgeData } from "./EdgeConnector"
import { VComponent } from "./VisComponent";
import { SimpleEventHandler } from "../etc/SimpleEventHandler";
import * as tp from "../etc/types"

export type AttentionData = number[][]

export const scaleLinearWidth = opacity => 5 * opacity^0.33;

export class AttentionGraph extends VComponent<AttentionData>{
    css_name = '';
    _current: {};

    _data: AttentionData; // The passed data
    edgeData: EdgeData; // A wrapper around _data. User should not mind
    plotData: Edge[]; // Needed for plotting

    /** COMPONENTS
     * Expose the components belonging to the class as properties of the class. 
     * This is useful to create methods that specifically modify a single part or component without having to reselect it. 
     * Makes for more responsive applications
     * */
    svg: D3Sel;
    graph: D3Sel;

    // The below components require data
    paths: D3Sel;
    opacityScales: d3.ScaleLinear<any, any>[];
    linkGen: d3.Link<any, any, any>

    // OPTIONS WITH DEFAULTS
    _threshold = 0.7; // Accumulation threshold. Between 0-1
    normBy: tp.NormBy

    static events = {} // No events needed for this one

    options = {
        boxheight: 26, // The height of the div boxes around the SVG element
        height: 500,
        width: 200,
        offset: 0, // Should I offset the left side by 1 or not?
    }

    constructor(d3Parent: D3Sel, eventHandler?: SimpleEventHandler, options: {} = {}) {
        super(d3Parent, eventHandler)
        this.superInitSVG(options)
        this._init()
    }

    _init() {
        this.svg = this.parent;
        this.graph = this.svg.selectAll(`.atn-curve`);
        this.linkGen = d3.linkHorizontal()
            .x(d => d[0])
            .y(d => d[1]);
    }

    // Define whether to use the 'j' or 'i' attribute to calculate opacities
    private scaleIdx(): "i" | "j" {
        switch (this.normBy) {
            case tp.NormBy.Col:
                return 'j'
            case tp.NormBy.Row:
                return 'i'
            case tp.NormBy.All:
                return 'i'

        }

    }

    /**
     * Create connections between locations of the SVG using D3's linkGen
     */
    private createConnections() {
        const self = this;
        const op = this.options;
        if (this.paths) {
            this.paths.attrs({
                'd': (d, i) => {
                    const data: { source: [number, number], target: [number, number] } =
                    {
                        source: [0, op.boxheight * (d.i + 0.5 + op.offset)],
                        target: [op.width, op.boxheight * (d.j + 0.5)] // + 2 allows small offset
                    };
                    return this.linkGen(data);
                },
                'class': 'atn-curve'
            })
                .attr("src-idx", (d, i) => d.i)
                .attr("target-idx", (d, i) => d.j);
        }
    }

    /**
     * Change the height of the SVG
     */
    private updateHeight() {
        const op = this.options;
        if (this.svg != null) {
            this.svg.attr("height", this.options.height + (op.offset * this.options.boxheight))
        }
        return this;
    }

    /**
     * Change the width of the SVG
     */
    private updateWidth() {
        if (this.svg != null) {
            this.svg.attr("width", this.options.width)
        }
        return this;
    }

    /**
     * Change the Opacity of the lines according to the value of the data
     */
    private updateOpacity() {
        const self = this;
        if (this.paths != null) {
            // paths.transition().duration(500).attr('opacity', (d) => {
            this.paths.attr('opacity', (d) => {
                const val = this.opacityScales[d[self.scaleIdx()]](d.v);
                return val;
            })
            this.paths.attr('stroke-width', (d) => {
                const val = this.opacityScales[d[self.scaleIdx()]](d.v);
                return scaleLinearWidth(val) //5 * val^0.33;
            })
        }
        return this;
    }

    /**
     * Rerender the graph in the event that the data changes
     */
    private updateData() {
        if (this.graph != null) {
            d3.selectAll(".atn-curve").remove();

            const data = this.plotData

            this.paths = this.graph
                .data(data)
                .join('path');

            this.createConnections();
            this.updateOpacity();

            return this;
        }
    }

    /**
     * Scale the opacity according to the values of the data, from 0 to max of contained data
     * Normalize by each source target, or across the whole
     */
    private createScales = () => {
        this.opacityScales = [];
        let arr = []

        // Group normalization
        switch (this.normBy){
            case tp.NormBy.Row:
                arr = this.edgeData.extent(1);
                this.opacityScales = [];
                arr.forEach((v, i) => {
                    (this.opacityScales as d3.ScaleLinear<any, any>[]).push(
                        d3.scaleLinear()
                            .domain([0, v[1]])
                            .range([0, 0.9])
                    )
                })
                break;
            case tp.NormBy.Col:
                arr = this.edgeData.extent(0);
                this.opacityScales = [];
                arr.forEach((v, i) => {
                    (this.opacityScales as d3.ScaleLinear<any, any>[]).push(
                        d3.scaleLinear()
                            .domain([0, v[1]])
                            .range([0, 0.9])
                    )
                })
                break;
            case tp.NormBy.All:
                const maxIn = d3.max(this.plotData.map((d) => d.v))
                for (let i = 0; i < this._data.length; i++) {
                    this.opacityScales.push(d3.scaleLinear()
                        .domain([0, maxIn])
                        .range([0, 1]));
                }
                break;
            default:
                console.log("Nor norming specified");
                break;
        }
    }

    /**
     * Access / modify the data in a D3 style way. If modified, the component will update just the part that is needed to be updated
     */
    data(): AttentionData
    data(value: AttentionData): this
    data(value?) {
        if (value == null) {
            return this._data;
        }

        this._data = value;
        this.edgeData = new EdgeData(value);
        this.plotData = this.edgeData.format(this._threshold);
        this.createScales();
        this.updateData();
        return this;
    }

    /**
     * Access / modify the height in a D3 style way. If modified, the component will update just the part that is needed to be updated
     */
    height(): number
    height(value: number): this
    height(value?) {
        if (value == null) {
            return this.options.height
        }

        this.options.height = value
        this.updateHeight()
        return this;
    }

    /**
     * Access / modify the width in a D3 style way. If modified, the component will update just the part that is needed to be updated
     */
    width(): number
    width(value: number): this
    width(value?: number): this | number {
        if (value == null) {
            return this.options.width;
        }
        this.options.width = value;
        this.updateWidth();
        return this;
    }

    /**
     * Access / modify the threshold in a D3 style way. If modified, the component will update just the part that is needed to be updated
     */
    threshold(): number
    threshold(value: number): this
    threshold(value?) {
        if (value == null) {
            return this._threshold;
        }

        this._threshold = value;
        this.plotData = this.edgeData.format(this._threshold);
        this.createScales();
        this.updateData();
        return this;
    }

    _wrangle(data: AttentionData) {
        return data;
    }

    _render(data: AttentionData) {
        this.svg.html('')
        this.updateHeight();
        this.updateWidth();

        this.updateData();
        return this;
    }
}