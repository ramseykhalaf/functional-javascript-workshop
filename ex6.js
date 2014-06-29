'use strict'

function countWords(inputWords) {
    return inputWords.reduce(function(memo, word) {
        memo[word] = memo[word]+1 || 1;
        return memo;
    }, {});
}

module.exports = countWords