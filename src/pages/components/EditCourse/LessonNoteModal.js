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
    super();
    this.state = {
      notes: null
    };
    this.update = this.update.bind(this);
    this.save = this.save.bind(this);
  }

  update(event) {
    this.setState({
      notes: event.target.value
    });
  }

  save() {
    this.props.updateStack(this.state.notes, 'notes');
    this.props.toggle();
  }

  render() {
    return (
      <Modal isOpen={this.props.open} toggle={this.props.toggle}>
        <ModalHeader>Lesson Notes</ModalHeader>
        <ModalBody>
          <Input onChange={this.update} type="textarea" style={{height: 300}}/>
        </ModalBody>
        <ModalFooter>
        <Button onClick={this.save} color="primary"> Save</Button>
        </ModalFooter>
      </Modal>
    )
  }
}
