import React, { Component } from 'react'
import {
  Button
} from 'reactstrap'

export default class Launch extends Component {
  render() {
    return (
      <div style={divStyle}>
      <div className="jumbotron" style={jumbotronStyle}>
        <h1>Welcome!</h1>
        <Button color="primary" size="lg">Start</Button>
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
  minWidth: 400,
  maxWidth: 600
}
