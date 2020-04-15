import React, {Component} from 'react'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import Menu from './Components/menu'
import Form from './Components/form'

export default class main extends Component {
  render(){
    return(
      <div className='container'>
        <React.StrictMode>
          <Menu />
          <Form />
        </React.StrictMode>
      </div>
    )
  }
}
