import React, { Component } from 'react';
import {
  ListGroup,
  Button
} from 'reactstrap';
import { withFirebase } from '../components/Firebase';

import NewLesson from './NewLesson.js';

class EditCourse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lessons: [<NewLesson key={0} id={'1'} removeLesson={this.removeLesson.bind(this)}/>]
    }

    this.newLesson = this.newLesson.bind(this)
    this.removeLesson = this.removeLesson.bind(this)
  }

  componentDidMount() {
    this.props.firebase.auth.onAuthStateChanged(auth => {
      if (auth == null)
        window.location.href = '/login';
    });
  }

  newLesson() {
    let l = [...this.state.lessons];
    let lid = l.length + 1
    l.push(<NewLesson key={lid - 1} id={lid.toString()} removeLesson={this.removeLesson}/>)
    this.setState({
      lessons: l
    })
  }

  removeLesson(event) {
    // TODO
    console.log("from remove")
    console.log(event)
    let id = 1
    let l = [...this.state.lessons];
    l.splice(id,1);
  }

  render() {
    return (
      <div>
        <div style={editStyle}>
        <h1 style={{color: 'dimgrey'}} >Course Creation</h1>
        <h6 style={{color: 'dimgrey'}}> Set up the structure and content of your course</h6>
        <ListGroup>
          {this.state.lessons}
        </ListGroup>
        <Button onClick={this.newLesson}>New Lesson <i className="fas fa-plus-circle"></i></Button>
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
