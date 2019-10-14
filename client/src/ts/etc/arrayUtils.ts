// [[val, ind], [val, ind]...]
type CompFnInd = (a:number[], b:number[]) => number;

export interface SortArray {
    arr: number[],
    sortIndices: number[],
}

/**
 * Copies and sorts an array while keeping track of the indices. Currently only supports sorting max -> min.
 * 
 * @param arr - Array to be copied and sorted
 */
export function sortWithIndices(arr:number[], fn?:CompFnInd): SortArray {
    // If fn is not provided, default to sorting by max value
    if (!fn) {
        fn = function(left, right) {
        return left[0] > right[0] ? -1 : 1;
        } 
    }

    let out:SortArray = {
        arr: [],
        sortIndices: []
    };

    let idxTracker: number[][] = []
    for (let i = 0; i < arr.length; i++) {
      idxTracker[i] = [arr[i], i];
    }

    idxTracker.sort(function(left, right) {
      return left[0] > right[0] ? -1 : 1;
    });

    for (var j = 0; j < arr.length; j++) {
      out.sortIndices.push(idxTracker[j][1]);
      out.arr[j] = idxTracker[j][0];
    }

    return out;
  }