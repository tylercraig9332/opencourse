import React, { Component } from 'react';
import {
  Form,
  FormGroup,
  Label,
  Input,
  Option,
  FormText,
  Button
} from 'reactstrap'
import NavBar from '../components/Navbar.js';

import '../components/Firebase/firebaseAuth.js';
import 'firebaseui/dist/firebaseui.css';

export default class Login extends Component {
  render(){
    return(
      <div>
      <NavBar />
      <div style={jumbotronStyle}>
        <h1>Login</h1>
        <h4>to get started with your new learning adventure</h4>
      </div>
      <div id="firebaseui-auth-container"></div>
    </div>
    )

  }
}

const jumbotronStyle = {
  color: 'dimgrey',
  //backgroundColor: 'lightgrey',
  alignItems: 'center',
  textAlign: 'center',
  padding: 5
}
