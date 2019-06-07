import React, {Component} from 'react';

import {
  ListGroupItem
} from 'reactstrap';

export default class Quiz extends Component {
  render() {
    return (
        <ListGroupItem key={this.props.key} color="success">Quiz: {this.props.data}</ListGroupItem>
    );
  }
}
