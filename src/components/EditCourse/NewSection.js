import React, { Component } from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu
} from 'reactstrap'

import QuizModal from './QuizModal.js';
import LessonNoteModal from './LessonNoteModal.js';
//import MediaUrlModal from './MediaUrlModal.js';

export default class NewSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false,
      quizModal: false,
      lessonNoteModal: false,
      mediaUrlModal: false,
      stack: props.stack
    };

    this.toggle = this.toggle.bind(this);
    this.quizModal = this.quizModal.bind(this)
    this.lessonNoteModal = this.lessonNoteModal.bind(this)
  }

  toggle() {
    this.setState({dropdownOpen: !this.state.dropdownOpen});
  }

  quizModal() {
    this.setState({quizModal: !this.state.quizModal});
  }

  lessonNoteModal() {
    this.setState({lessonNoteModal: !this.state.lessonNoteModal});
  }

  mediaUrlModal() {
    this.setState({mediaUrlModal: !this.state.mediaUrlModal});
  }

  render() {
    let quiz = (<QuizModal open={this.state.quizModal} toggle={this.quizModal} updateStack={this.props.updateStack}/>);
    let lesson = (<LessonNoteModal open={this.state.lessonNoteModal} toggle={this.lessonNoteModal} updateStack={this.props.updateStack}/>);
    //let media = (this.state.mediaUrlModal) ? <MediaUrlModal /> : undefined;

    return (
      <div style={{padding: '1rem'}}>
       {quiz}
       {lesson}
        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle caret>
            <span><i className="fas fa-plus-square"></i> New Section</span>
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Lesson</DropdownItem>
            <DropdownItem onClick={this.lessonNoteModal}>Lesson Notes</DropdownItem>
            <DropdownItem divider />
            <DropdownItem header>Quiz</DropdownItem>
            <DropdownItem onClick={this.quizModal}>Multiple Choice</DropdownItem>
            <DropdownItem>Group-pairs</DropdownItem>
            <DropdownItem divider />
            <DropdownItem header>Media</DropdownItem>
            <DropdownItem>Image</DropdownItem>
            <DropdownItem>Video</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    );
  }

}
