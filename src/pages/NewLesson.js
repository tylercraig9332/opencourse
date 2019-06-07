import React, { Component } from 'react'
import {
  Button,
  ButtonGroup,
  Row,
  Col,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input
} from 'reactstrap'

import NewSectionDropDown from './components/EditCourse/NewSection.js';
import LectureNote from './components/EditCourse/LectureNote.js';
import Quiz from './components/EditCourse/Quiz.js';


export default class NewLesson extends Component {
    constructor(props) {
      super(props);
      this.state = {
        lesson: {
          id: props.id,
          title: props.id,
          stack: []
        },
        renameVisable: false
      };

      this.updateStack = this.updateStack.bind(this);
      this.updateTitle = this.updateTitle.bind(this);
      this.toggleRename = this.toggleRename.bind(this);
    }

    updateStack(data, key) {
      let newlesson = this.state.lesson;
      let newstack = [...newlesson.stack];
      if (key === 'notes') {
        newstack.push(<LectureNote data={data} key={newstack.length}/>);
      }
      else if (key === 'quiz') {
        newstack.push(<Quiz data={data} key={newstack.length}/>)
      }
      newlesson.stack = newstack;
      this.setState({lesson: newlesson});
    }

    updateTitle() {
      alert("this is not yet implemented")
      this.toggleRename()
    }

    toggleRename() {
      this.setState({
        renameVisable: !this.state.renameVisable
      })
    }

    render() {
      let renameModal =
        (
          <Modal isOpen={this.state.renameVisable} toggle={this.toggleRename}>
          <ModalHeader toggle={this.toggleRename}>Rename Lesson</ModalHeader>
          <ModalBody>
             New Lesson Title:
             <Input />
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggleRename} outline>Cancel</Button>{' '}
            <Button color="primary" onClick={this.updateTitle} outline>Rename</Button>
          </ModalFooter>
        </Modal>
      );

      return (
        <div style={lesson}>
        {renameModal}
          <Row style={{padding: '.5rem'}}>

            <Button color="primary" onClick={this.toggleRename} style={button} outline>
              Lesson {this.state.lesson.title} <i className="fas fa-edit"></i>
            </Button>
            <NewSectionDropDown stack={this.state.stack} updateStack={this.updateStack} />
            <Button style={button} outline>Vocabulary <i className="fas fa-list"></i></Button>
            <Col>
            <Button style={buttonRight} close/>
            <Button color="info" style={buttonRight} outline>
              Preview
            </Button>
            </Col>
          </Row>
          {this.state.lesson.stack}
        </div>
      )
    }
}

const lesson = {
  borderStyle: 'solid',
  borderColor: 'dimgrey',
  borderRadius: 15,
  padding: 10,
  marginBottom: 10
}

const button = {
  marginRight: 3,
  marginLeft: 5
}

const buttonRight = {
  marginRight: 3,
  marginLeft: 5,
  justifyContent: 'right',
  alignItems: 'right',
  textAlign: 'right',
  float: 'right'
}
