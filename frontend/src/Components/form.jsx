import React, { useState } from 'react'
import axios from 'axios'

import './form.css'

const api = axios.create({
  baseURL: 'http://localhost:3333'
});

function Form() {
  // const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');

  function clear() {
    // setFrom('');
    setTo('');
    setSubject('');
    setBody('');
  }

  async function sendEmail() {
    try {
      const data = {
        to,
        subject,
        message: body
      };

      const response = await api.post('/enviar/email', data);

      const { message } = response.data;

      clear();

      alert(message);
    } catch (err) {
      clear();

      const { response } = err;

      const { error } = response.data;

      alert(error);
    }
  }

  return (
    <div role='form' className='form-group Border'>
      {/* <div className='col-sm-12 Height Bottom'>
        <button className='btn btn-light'>De</button>
        <input type='email' id='to' className='form-control' name='to' value={from} onChange={({ target }) => setFrom(target.value) }></input>
      </div> */}
      <div className='col-sm-12 Height Bottom'>
        <button className='btn btn-light'>Para</button>
        <input type='email' id='to' className='form-control' name='to' value={to} onChange={({ target }) => setTo(target.value)}></input>
      </div>
      <div className='Height Bottom'>
        <input type='text' id='subject' className='form-control' name='subject' value={subject} onChange={({ target }) => setSubject(target.value)} placeholder='Adicionar assunto'></input>
      </div>
      <div id='messageBody'>
        <div className='Bottom'>
          <textarea className='form-control' id='text' name='text' rows='11' value={body} onChange={({ target }) => setBody(target.value)}>
          </textarea>
        </div>
        <span className='col-sm-12 align-right'>
          <button className='btn btn-primary' onClick={sendEmail}>Enviar</button>
        </span>
      </div>
    </div>
  );
}

export default Form;

// const initialState = {
//     user: '',
//     password: '',
//     to: '',
//     subject: '',
//     text: '',
//     description: '',
//     list: []
// }

// const URL = 'http://localhost:3003/api/emails'


    // constructor(props){
    //     super(props)
    //     this.state = {...initialState}
    //     this.send = this.send.bind(this)
    //     this.handleChange = this.handleChange.bind(this)
    // }

    // send(){
    //     const newState = {...this.state}
    //     axios.post(URL, {newState}).then(resp => console.log('funcionou'))
    // }

    // handleChange(e){
    //     const target = e.target
    //     if (target.name === 'user') {
    //         this.setState({...this.state, user: e.target.value})
    //     }else if (target.name === 'password') {
    //         this.setState({...this.state, password: e.target.value})
    //     }else if (target.name === 'to') {
    //         this.setState({...this.state, to: e.target.value})
    //     }else if (target.name === 'subject') {
    //         this.setState({...this.state, subject: e.target.value})
    //     }else if (target.name === 'text') {
    //         this.setState({...this.state, text: e.target.value})
    //     }
    // }
