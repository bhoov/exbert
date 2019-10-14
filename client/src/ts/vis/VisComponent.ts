/**
 * Created by Hendrik Strobelt (hendrik.strobelt.com) on 12/3/16.
 * Modified by Ben Hoover on 4/16/2019
 */
import * as d3 from 'd3'
import {D3Sel, Util} from "../etc/Util";
import {SimpleEventHandler} from "../etc/SimpleEventHandler";
import {SVG} from "../etc/SVGplus";

/**
 * Should have VComponentHTML and VComponentSVG
 * 
 * Common Properties:
 * - events
 * - eventHandler (V important)
 * - options (Maintains public state. Can expose these with get/set functions with auto update)
 * - _current (Maintains private state)
 * - cssName (synced with corresponding CSS file)
 * - parent (HTML is div containing the base, SVG is SVG element)
 * - base (HTML is div with css_name established)
 * - _data (Data used to create and render the component)
 * - _renderData (Data needed to display. This may not be needed, but is currently used in histogram)
 * 
 * Common Methods:
 * - constructor
 * - _render()      Consider replacing with `_updateData()` that updates all data at once
 * - update()       Consider replacing this with `data()` that auto updates data
 * - redraw()
 * - destroy()
 */

export abstract class VComponent<DataInterface> {

    // STATIC FIELDS ============================================================

    /**
     * The static property that contains all class related events.
     * Should be overwritten and event strings have to be unique!!
     */

    static events: {} = {noEvent: 'VComponent_noEvent'};

    /**
     * Defines the layers in SVG  for bg,main,fg,...
     */
    // protected abstract readonly layout: { name: string, pos: number[] }[] = [{name: 'main', pos: [0, 0]}];

    protected id: string; // Mostly obsolete, nice to have simple ID to assign in CSS
    protected parent: D3Sel;
    protected abstract options: { [key: string]: any };
    protected base: D3Sel; // Mostly obsolete, represents <g> in svg
    protected layers: { main?: D3Sel, fg?: D3Sel, bg?: D3Sel, [key: string]: D3Sel }; // Still useful
    protected eventHandler: SimpleEventHandler;
    protected _visibility: { hidden: boolean, hideElement?: D3Sel | null; [key: string]: any }; // Enables transitions from visible to invisible. Mostly obsolete.
    protected _data: DataInterface;
    protected renderData: any; // Unnecessary
    protected abstract css_name: string; // Make the same as the corresponding css file
    protected abstract _current: {}; // Private state information contained in the object itself.

    // CONSTRUCTOR ============================================================

    /**
     * Simple constructor. Subclasses should call @superInit(options) as well.
     * see why here: https://stackoverflow.com/questions/43595943/why-are-derived-class-property-values-not-seen-in-the-base-class-constructor
     *
     * template:
     constructor(d3Parent: D3Sel, eventHandler?: SimpleEventHandler, options: {} = {}) {
        super(d3Parent, eventHandler);
        // -- access to subclass params:
        this.superInit(options);
     }
     *
     * @param {D3Sel} d3parent  D3 selection of parent SVG DOM Element
     * @param {SimpleEventHandler} eventHandler a global event handler object or 'null' for local event handler
     */
    protected constructor(d3parent: D3Sel, eventHandler?: SimpleEventHandler) {
        this.id = Util.simpleUId({});

        this.parent = d3parent;

        // If not further specified - create a local event handler bound to the bas element
        this.eventHandler = eventHandler ||
            new SimpleEventHandler(this.parent.node());

        // Object for storing internal states and variables
        this._visibility = {hidden: false};

    }

    protected superInitHTML(options: {} = {}) {
        Object.keys(options).forEach(key => this.options[key] = options[key]);
        this.base = this.parent.append('div')
            .classed(this.css_name, true)
    }

    /**
     * Has to be called as last call in subclass constructor.
     * 
     * @param {{}} options
     * @param defaultLayers -- create the default <g> layers: bg -> main -> fg
     */
    protected superInitSVG(options: {} = {}, defaultLayers = ['bg', 'main', 'fg']) {
        // Set default options if not specified in constructor call
        // const defaults = this.defaultOptions;
        // this.options = {};
        // const keys = new Set([...Object.keys(defaults), ...Object.keys(options)]);
        // keys.forEach(key => this.options[key] = (key in options) ? options[key] : defaults[key]);
        Object.keys(options).forEach(key => this.options[key] = options[key]);

        this.layers = {};

        // Create the base group element
        const svg = this.parent;
        this.base = SVG.group(svg,
            this.css_name + ' ID' + this.id,
            this.options.pos);

        // create default layers: background, main, foreground
        if (defaultLayers) {
            // construction order is important !
            defaultLayers.forEach(layer =>{
                this.layers[layer] = SVG.group(this.base, layer);
            });
        }
    }


    /**
     * Should be overwritten to create the static DOM elements
     * @abstract
     * @return {*} ---
     */
    protected abstract _init();

    // DATA UPDATE & RENDER ============================================================

    /**
     * Every time data has changed, update is called and
     * triggers wrangling and re-rendering
     * @param {Object} data data object
     * @return {*} ---
     */
    update(data: DataInterface) {
        this._data = data;
        if (this._visibility.hidden) return;
        this.renderData = this._wrangle(data);
        this._render(this.renderData);
    }

    /**
     * Data wrangling method -- implement in subclass. Returns this.renderData.
     * Simplest implementation: `return data;`
     * @param {Object} data data
     * @returns {*} -- data in render format
     * @abstract
     */
    protected abstract _wrangle(data);


    /**
     * Is responsible for mapping data to DOM elements
     * @param {Object} renderData pre-processed (wrangled) data
     * @abstract
     * @returns {*} ---
     */
    protected abstract _render(renderData): void;


    // UPDATE OPTIONS ============================================================
    /**
     * Updates instance options
     * @param {Object} options only the options that should be updated
     * @param {Boolean} reRender if option change requires a re-rendering (default:false)
     * @returns {*} ---
     */
    updateOptions({options, reRender = false}) {
        Object.keys(options).forEach(k => this.options[k] = options[k]);
        if (reRender) this._render(this.renderData);
    }


    // === CONVENIENCE ====
    redraw(){
        this._render(this.renderData);
    }

    setHideElement(hE: D3Sel) {
        this._visibility.hideElement = hE;
    }

    hideView() {
        if (!this._visibility.hidden) {
            const hE = this._visibility.hideElement || this.parent;
            hE.transition().styles({
                'opacity': 0,
                'pointer-events': 'none'
            }).style('display', 'none');
            this._visibility.hidden = true;
        }
    }

    unhideView() {
        if (this._visibility.hidden) {
            const hE = this._visibility.hideElement || this.parent;
            hE.transition().styles({
                'opacity': 1,
                'pointer-events': null,
                'display': null
            });
            this._visibility.hidden = false;
            // this.update(this.data);

        }
    }

    destroy() {
        this.base.remove();
    }

    clear() {
        this.base.html('');
    }

}