const moment = require('moment')

function sendMessage(username, message) {
    return {
        username,
        message,
        time: moment().format('h:mm a')
    }
}

module.exports = sendMessage