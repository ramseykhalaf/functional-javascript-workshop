'use strict'

module.exports = function arrayMap(arr, fn) {
    return arr.reduce(function(memo, next) {
        memo.push(fn(next));
        return memo;
    }, []);
}