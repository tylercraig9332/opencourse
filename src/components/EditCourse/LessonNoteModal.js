import React, { Component } from 'react';

import {
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Input,
  Button
} from 'reactstrap';

export default class LessonNoteModal extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render() {
    return (
      <Modal isOpen={this.props.open} toggle={this.props.toggle}>
        <ModalHeader>Lesson Notes</ModalHeader>
        <ModalBody>
          <Input type="textarea" style={{height: 300}}/>
        </ModalBody>
        <ModalFooter>
        <Button color="primary"> Save</Button>
        </ModalFooter>
      </Modal>
    )
  }
}
