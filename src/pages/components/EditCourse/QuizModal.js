import React, { Component } from 'react';

import {
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Button,
  Input
} from 'reactstrap';

export default class QuizModal extends Component {
  constructor() {
    super();
    this.state = {
      data: {
        title: 'new quiz',
        questions: []
      }
    };
    this.save = this.save.bind(this);
  }

  update(event) {
    //let d = Object.assign({}, this.state.data);
    if (event.target.id === 'title') {
      //d.title = event.target.value
    }
    if (event.target.id === 'answer') {
      //d.ans
    }
  }

  save() {
    this.props.updateStack('New Quiz', 'quiz');
    this.props.toggle();
  }

  render() {
    return (
      <Modal isOpen={this.props.open} toggle={this.props.toggle}>
        <ModalHeader>New Quiz</ModalHeader>
        <ModalBody>
          <Input id="title" onChange={this.update}/>
        </ModalBody>
        <ModalFooter><Button onClick={this.save} color="primary"> Save</Button></ModalFooter>
      </Modal>
    )
  }
}
