'use strict'

function Spy(target, method) {
    var retval = { count: 0 };
    var originalFunction = target[method];

    target[method] = function() {
        retval.count++
        return originalFunction.apply(this, arguments);
    }

    return retval;
}

module.exports = Spy