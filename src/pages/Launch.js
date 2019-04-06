import React, { Component } from 'react'
import {
  Button
} from 'reactstrap'

export default class Launch extends Component {
  render() {
    return (
      <div style={divStyle}>
      <div className="jumbotron" style={jumbotronStyle}>
        <h1>Welcome to Opencourse!</h1>
        <p>Where knowlege is open and learning is free</p>
        <img style={{maxWidth: 475, maxHeight: 400}} src={require("../static/janko-ferlic-174927-unsplash.jpg")}/>
        <br />
        <Button href="/login" color="primary" size="lg" style={{margin: 10}}>Start</Button>
        </div>
      </div>
    )
  }
}

const divStyle = {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
}

const jumbotronStyle = {
  alignItems: 'center',
  textAlign: 'center',
}
