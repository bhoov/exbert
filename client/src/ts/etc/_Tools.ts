import * as _ from 'lodash'

function ascOrder(n1, n2) {
    if (n1 < n2) {
        return -1;
    }
    else if (n1 > n2) { 
        return 1;
    }
    return 0;
}

export {findAllIndexes, insertAt_, orderedInsert_, set2SortedArray}

/**
 * Find all indexes that match a particular predicate
 */
function findAllIndexes<T>(array:Array<T>, predicate:(a:T) => boolean): number[] {
    let fromIndex=0;
    let results = [];

    let i = _.findIndex(array, predicate, fromIndex);
    while (i != -1) {
        results.push(i);
        i = _.findIndex(array, predicate, i+1)
    }

    return results;
};

function insertAt_<T>(array:Array<T>, val:T, ind:number):Array<T> {
    array.splice(ind, 0, val);
    return array
}

/**
 * Convert a set to an ordered array
 */
function set2SortedArray<T>(input:Set<T>):Array<T> {
    return Array.from(input).sort(ascOrder)
}

/**
 * Insert a value into array in sorted order IN PLACE
 * 
 * WARNING: Only handles numbers, sorted from least to greatest
 * - Assumes already sorted array
 */
function orderedInsert_<T>(array:Array<T>, val:T, coldstart=false):Array<T> {
    // Resort array if desired
    if (coldstart) {
        array.sort(ascOrder)
    }

    const ind = _.sortedIndex(array, val);
    return insertAt_(array, val, ind)
}

export function makeRandom(len:number){
  const a:number[] = new Array(len).fill(0)

  return a.map((x) => {return _.random(-5, 5, true)})
}