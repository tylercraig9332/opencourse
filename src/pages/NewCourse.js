import React, {Component} from 'react';
import { withFirebase } from '../components/Firebase';
import {
  Button,
  Form,
  FormGroup,
  Input,
  Label
} from 'reactstrap';


class NewCourse extends Component {
  constructor() {
    super();
    this.state = {
      formContent: {
        title: null,
        description: null,
        tags: []
      },
      loading: false
    }
    this.save = this.save.bind(this);
    this.onUserInput = this.onUserInput.bind(this);
    this.handleTags = this.handleTags.bind(this);
    this.complete = this.complete.bind(this);
  }
  componentDidMount() {
    this.props.firebase.auth.onAuthStateChanged(auth => {
      if (auth == null)
        window.location.href = '/login';
    });
  }

  save() {
    this.setState({loading: true})
    let db = this.props.firebase.firestore();
    /*db.settings({
      timestampsInSnapshots: true
    });*/
    db.collection('courses').add({
      title: this.state.formContent.title,
      description: this.state.formContent.description,
      tags: this.state.formContent.tags
    })
    this.complete();
  }

  complete(){
    setInterval(function () {
      window.location.href = './editcourseview'
    }, 2000);
  }

  onUserInput(event) {
    let formc = Object.assign({}, this.state.formContent);

    if (event.target.name === "courseTitle")
    {
      formc.title = event.target.value;
      this.setState({
        formContent: formc
      },() => {
        console.log(this.state.formContent)
      })
    }
    if (event.target.name === "courseDescription")
    {
      formc.description = event.target.value;
      this.setState({
        formContent: formc
      },() => {
        console.log(this.state.formContent)
      })
    }


  }

  handleTags(event) {
    let formc = Object.assign({}, this.state.formContent);
    let tagArray = event.target.value.split(',');
    formc.tags = tagArray
    this.setState({
      formContent: formc
    })
  }

  render() {
    let loading = (this.state.loading) ?
    (<div style={border} className="alert alert-info" role="alert">
      <i className="fas fa-info-circle"></i> Loading
    </div>) : (undefined)
    return (
      <div>
        {loading}
        <h1 style={title}>New Course:</h1>
        <div style={border}>
          <Form >
          <FormGroup>
            <Label for="title">Title</Label>
            <Input onChange={this.onUserInput} type="title" name="courseTitle" id="title" placeholder="Enter a Title" />
          </FormGroup>
          <FormGroup>
            <Label for="courseDescription">Description</Label>
            <Input onChange={this.onUserInput} style={{height: 160}}type="textarea" name="courseDescription" id="description" placeholder="Enter a description for your course" />
          </FormGroup>
          <FormGroup>
            <Label for="tags">Tags</Label>
            <Input onChange={this.handleTags} type="textarea" name="courseTags" id="tags" placeholder="Add tag(s) for your course. Seperate by commas." />
          </FormGroup>
          <Button onClick={this.save}>Next</Button>
          </Form>
        </div>
    </div>
    )
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

export default withFirebase(NewCourse);
