import * as d3 from 'd3'
import {BaseType, Selection} from "d3";

declare module 'd3-selection' {
    export interface Selection<
        GElement extends BaseType,
        Datum,
        PElement extends BaseType,
        PDatum> 
        {
            toggleClass: (name:string) => Selection<GElement, Datum, PElement, PDatum>
            clear: () => Selection<GElement, Datum, PElement, PDatum>
            show: () => Selection<GElement, Datum, PElement, PDatum>
            hide: () => Selection<GElement, Datum, PElement, PDatum>
            toggle: () => Selection<GElement, Datum, PElement, PDatum>
            after: (tagName:string) => Selection<GElement, Datum, PElement, PDatum>
            before: (tagName:string) => Selection<GElement, Datum, PElement, PDatum>
        }

    export const NoType: any;
}