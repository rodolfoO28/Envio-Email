const express = require('express')

module.exports = function(server){
    const router = express.Router()
    server.use('/api', router)

    const EmailService = require('../api/email/emailService')
    EmailService.register(router, '/emails')
}