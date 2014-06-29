'use strict'

function checkUsersValid(goodUsers) {
    return function(submittedUsers) {
        return submittedUsers.every(function(sub) {
            return goodUsers.some(function(good) {
                return good.id === sub.id;
            });
        });
    };
}

module.exports = checkUsersValid