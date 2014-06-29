'use strict' 

function reduce(arr, fn, initial) {
    function reduceInner(i, memo) {
        if (i === arr.length) return memo;
        return reduceInner(i+1, fn(memo, arr[i], i, arr));
    }
    return reduceInner(0, initial);
}

module.exports = reduce

