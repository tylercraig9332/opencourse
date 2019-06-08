import React, {Component} from 'react';

import {
  Button
} from 'antd';

export default class Icon extends Component {
  render() {
    let s = icon;
    if (this.props.type === 'edit') {
      // The edit logo is centered weird which drives me fucking crazy lmao
      s = edit;
    }
    return (
      <span>
        <Button onClick={this.props.action} type="normal" shape="circle" ><i  style={s} className={`fas fa-${this.props.type}`}></i></Button>
      </span>
    )
  }
}

const icon = {
  fontSize: '.9em',
  bottom: '1px',
  position: 'relative'
}

const edit = {
  fontSize: '.9em',
  bottom: '1px',
  left: '.1em',
  position: 'relative'
}
