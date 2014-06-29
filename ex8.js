'use strict'

function duckCount() {
    var argsArray = Array.prototype.slice.call(arguments);
    return argsArray.filter(function(possibleDuck) {
        return Object.prototype.hasOwnProperty.call(possibleDuck, 'quack');
    }).length;

}

module.exports = duckCount