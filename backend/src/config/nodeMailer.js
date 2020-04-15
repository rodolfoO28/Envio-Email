const nodemailer = require('nodemailer')
const email = require('../api/email/email')

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: email.user,
        pass: email.password
    }
});

let mailOptions = {
    from: email.user,
    to: email.to,
    subject: email.subject,
    text: email.text
};

transporter.sendMail(mailOptions, function(err, data) {
    if (err) {
        console.log('Error', err)
    }else{
        console.log('Sucesso')
    }
});