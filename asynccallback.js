'use strict'

function loadUsers(userIds, load, done) {
    var users = []
    var countLoaded = 0

    userIds.forEach(function(userId, index) {
        load(userId, function(loadedUser) {
            users[index] = loadedUser
            countLoaded++
            if (countLoaded === userIds.length) done(users)
        })
    })
}

module.exports = loadUsers