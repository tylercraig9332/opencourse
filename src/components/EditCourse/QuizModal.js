import React, { Component } from 'react';

import {
  Modal,
  ModalBody,
  ModalHeader
} from 'reactstrap';

export default class QuizModal extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render() {
    return (
      <Modal isOpen={this.props.open} toggle={this.props.toggle}>
        <ModalHeader>New Quiz</ModalHeader>
        <ModalBody>Data To be inserted</ModalBody>
      </Modal>
    )
  }
}
