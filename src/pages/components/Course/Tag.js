import React, { Component } from 'react';

import {
  Badge
} from 'reactstrap';

export default class Tag extends Component {
  render() {
    return (
      <span style={tagStyle}>
        <a href={`./courses/tag/${this.props.value}`}>
          <Badge color={this.props.color}>{this.props.value}</Badge>
        </a>
      </span>
    );
  }
}

const tagStyle = {
  marginRight: 3
};
