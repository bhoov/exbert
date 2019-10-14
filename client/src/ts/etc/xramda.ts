import * as R from 'ramda'

/**
 * Map a list as values to an object whose keys are the original list
 */
// (String -> b)  -> [String] -> {String: b}
export const objFromKeys = R.curry((fn, keys) => R.zipObj(keys, R.map(fn, keys))) 

export const assignZero: (x:any) => number = x => 0;

/**
 * Given an list, create an object whose values are all 0
 */
export const initZero = objFromKeys(assignZero)