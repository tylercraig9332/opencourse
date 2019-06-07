import React, { Component } from 'react';
import { withFirebase } from '../components/Firebase';
import {
  Button,
  Form,
  FormGroup,
  Input,
  Label
} from 'reactstrap';

//import CourseResource from '../../resource/course.js';

class CourseEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.location.pathname.split('/')[2],
      title: "",
      tags: [],
      author: null,
      description: "",
      loading: true
    }

    this.load = this.load.bind(this);
    this.init = this.init.bind(this);
    this.save = this.save.bind(this);
    this.handleTags = this.handleTags.bind(this)
  }

  componentDidMount() {
    // Need to authenticate
    this.load()
  }

  load() {
    // Pulls the id that is in the url
    let docRef = this.props.firebase.firestore().collection('courses').doc(this.state.id)
    docRef.get().then((doc) => {
      if (doc.exists) {
        this.init(doc.data())
      }
      else {
        alert("course does not exist")
        window.location.href = '/courses'
      }
    }).catch((error) => {
      console.log("Error loading course", error);
    });
  }

  init(data) {
    //console.log(data)
    this.setState({
      title: data.title,
      tags: data.tags,
      description: data.description,
      author: data.author,
      loading: false,
    });
  }

  save() {
    if (this.state.author != this.props.firebase.auth.currentUser.uid) {
      alert("you do not have permission to edit this course");
      window.location.href = 'courses/';
    }
    this.setState({loading: true});
    let db = this.props.firebase.firestore();

    let docRef = db.collection('courses').doc(this.state.id)
    docRef.get().then((doc) => {
      // TODO: Update doc with new fields.
    })
  }

  handleTags() {
    // TODO:
  }

  render() {
    if (this.state.loading) {
    return (<div style={border} className="alert alert-info" role="alert">
      <i className="fas fa-info-circle"></i> Loading
    </div>)
    }
    return (
      <div>
      <h2 style={title}>Edit Course:</h2>
      <div style={border}>
        <Form >
        <FormGroup>
          <Label for="title">Title</Label>
          <Input onChange={this.onUserInput} type="title" name="courseTitle" id="title" value={this.state.title} />
        </FormGroup>
        <FormGroup>
          <Label for="courseDescription">Description</Label>
          <Input onChange={this.onUserInput} style={{height: 160}}type="textarea" name="courseDescription" id="description" value={this.state.description} />
        </FormGroup>
        <FormGroup>
          <Label for="tags">Tags</Label>
          <Input onChange={this.handleTags} type="textarea" name="courseTags" id="tags" placeholder="Add tag(s) for your course. Seperate by commas." />
        </FormGroup>
        <Button onClick={this.save}>Update</Button>
        </Form>
      </div>
      </div>
    );
  }
}

const border = {
  padding: "2rem",
  margin: "0 auto",
  width: '65%',
  maxWidth: 550,
  alignItems: 'center',
  justifyContent: 'center'
}

const title = {
  color: 'dimgrey',
  margin: '0 auto',
  marginTop: '1rem',
  width: '50%',
  alignItems: 'center',
  justifyContent: 'center'
}

export default withFirebase(CourseEdit);
