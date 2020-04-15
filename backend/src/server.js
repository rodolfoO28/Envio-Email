require('dotenv/config');

const express = require('express');
const cors = require('cors');
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const server = express();
server.use(cors());
server.use(express.json());

server.get('/', (req, res) => {
  return res.send('Ok')
})

server.post('/enviar/email', async (req, res) => {
  try {
    const { to, subject, message } = req.body;
  
    const msg = {
      to,
      from: 'rdf2806@gmail.com',
      subject,
      text: message,
      html: message,
    };

    await sgMail.send(msg);
    
    return res.json({ message: 'Email enviado com sucesso!'});
  } catch (error) {
    return res.status(400).json({
      error: 'Não foi possível enviar o email. Tente novamente mais tarde!'
    })
  }
})

const port = process.env.PORT;
server.listen(port, function() {
  console.log(`Backend is running on port ${port}.`)
})

module.exports = server
