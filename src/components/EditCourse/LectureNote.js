import React, {Component} from 'react';

import {
  ListGroupItem
} from 'reactstrap';

export default class LectureNote extends Component {
  render() {
    return (
        <ListGroupItem key={this.props.key} color="info">Lecture Notes: {this.props.data}</ListGroupItem>
    );
  }
}
