import React, {Component} from 'react'
import axios from 'axios'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import Menu from './Components/menu'
import Form from './Components/form'

const initialState = {
    user: '',
    password: '',
    to: '',
    subject: '',
    text: '',
    description: '', 
    list: []
}

const URL = 'http://localhost:3003/api/emails'

export default class main extends Component {
    
    constructor(props){
        super(props)
        this.state = {...initialState}
        this.send = this.send.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    send(){
        const newState = {...this.state}
        axios.post(URL, {newState}).then(resp => console.log('funcionou'))
    }

    handleChange(e){
        const target = e.target
        if (target.name === 'user') {
            this.setState({...this.state, user: e.target.value})    
        }else if (target.name === 'password') {
            this.setState({...this.state, password: e.target.value})
        }else if (target.name === 'to') {
            this.setState({...this.state, to: e.target.value})
        }else if (target.name === 'subject') {
            this.setState({...this.state, subject: e.target.value})
        }else if (target.name === 'text') {
            this.setState({...this.state, text: e.target.value})
        }
    }

    render(){
        return(
            <div className='container'>
                <React.StrictMode>
                    <Menu>

                    </Menu>
                    <Form send={this.send} user={this.state.user} password={this.state.password} 
                    to={this.state.to} subject={this.state.subject} text={this.state.text} handleChange={this.handleChange}>
                        
                    </Form>
                </React.StrictMode>
            </div>
        )
    }
}