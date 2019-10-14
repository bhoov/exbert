import * as d3 from "d3";
import {BaseType} from "d3";

/**
 * Created by hen on 5/15/17.
 * Modifyed by hoo on 4/16/19.
 */
let the_unique_id_counter = 0;

export class Util {
    static simpleUId({prefix = ''}): string {
        the_unique_id_counter += 1;

        return prefix + the_unique_id_counter;
    }
}

export type D3Sel = d3.Selection<any, any, any, any>

/**
 * Selection utility functions should be static methods in the below class
 */
export class Sel {
    static setSelVisible = (x:D3Sel) => x.attr("visibility", "visible")
    static setSelHidden = (x:D3Sel) => x.attr("visibility", "hidden")
    static setVisible = (x:string) => Sel.setSelVisible(d3.selectAll(x))
    static setHidden = (x:string) => Sel.setSelHidden(d3.selectAll(x))
}

export interface LooseObject {
    [key: string]: any
}

export type d3S<T extends BaseType, U = any> = d3.Selection<T, U, any, any>