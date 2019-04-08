import React, { Component } from 'react';
import {
  ListGroup
} from 'reactstrap';
import { withFirebase } from '../components/Firebase';
import Navbar from '../components/Navbar.js';

import NewSectionDropDown from '../components/EditCourse/NewSection.js';
import LectureNote from '../components/EditCourse/LectureNote.js';
import Quiz from '../components/EditCourse/Quiz.js';

class EditCourse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stack: []
    }

    this.updateStack = this.updateStack.bind(this)
  }

  componentDidMount() {
    this.props.firebase.auth.onAuthStateChanged(auth => {
      if (auth == null)
        window.location.href = '/login';
    });
  }

  updateStack(data, key) {
    let newstack = [...this.state.stack]
    if (key === 'notes') {
      newstack.push(<LectureNote data={data} key={newstack.length}/>);
    }
    else if (key === 'quiz') {
      newstack.push(<Quiz data={data} key={newstack.length}/>)
    }
    this.setState({stack: newstack})
  }

  render() {
    return (
      <div>
        <Navbar />
        <div style={editStyle}>
        <h1 style={{color: 'dimgrey'}} >Course Creation</h1>
        <h6 style={{color: 'dimgrey'}}> Set up the structure and content of your course</h6>
        <ListGroup>
          {this.state.stack}
        </ListGroup>
        <NewSectionDropDown stack={this.state.stack} updateStack={this.updateStack}/>
        </div>
      </div>
    );
  }

}

export default withFirebase(EditCourse);

const editStyle = {
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
  width: '55%',
  padding: '1rem'
};
