const restful = require('node-restful')
const mongoose = restful.mongoose

const EmailSchema = new mongoose.Schema({
    user: {type: String},
    password: {type: String},
    to: {type: String},
    subject: {type: String},
    text: {type: String}
})

module.exports = restful.model('email', EmailSchema)