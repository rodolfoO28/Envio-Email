import React from 'react'
import './form.css'


export default props =>(
    
    <div role='form' className='form-group Border'>
        <div className='col-sm-12 Height Bottom'>
            <button className='btn btn-light'>De</button>
                <input type='email' id='User' name='user' className='form-control' value={props.user} onChange={props.handleChange}></input>
                <button className='btn btn-light'>Senha</button>
                <input type='password' id='password' name='password' className='form-control' value={props.password} onChange={props.handleChange}></input>
        </div>
        <div className='col-sm-12 Height Bottom'>
            <button className='btn btn-light'>Para</button>
            <input type='email' id='to' className='form-control' name='to' value={props.to} onChange={props.handleChange}></input>
        </div>
        <div className='Height Bottom'>
            <input type='text' id='subject' className='form-control' name='subject' value={props.subject} onChange={props.handleChange} placeholder='Adicionar assunto'></input>
        </div>
        <div id='messageBody'>
            <div className='Bottom'>
                <textarea className='form-control' id='text' name='text' rows='11' value={props.text} onChange={props.handleChange}>
                </textarea>
            </div>
            <span className='col-sm-12 align-right'>
                <button className='btn btn-primary' onClick={props.send}>Enviar</button>
            </span>
        </div>                
    </div>
)
