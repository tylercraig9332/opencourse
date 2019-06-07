import React, {Component} from 'react';
import {withFirebase} from '../components/Firebase';

class CourseView extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      description: '',
      tags: []
    }
    this.load = this.load.bind(this)
    this.init = this.init.bind(this)
  }

  componentDidMount() {
    this.load()
  }

  load() {
    // Pulls the id that is in the url
    const courseId = this.props.location.pathname.split('/')[2]
    let docRef = this.props.firebase.firestore().collection('courses').doc(courseId)
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
      description: data.description
    })
  }


  render() {
    return (
      <div>
        <h1>title: {this.state.title}</h1>
        <p>desc: {this.state.description}</p>
        <p>Tags: {this.state.tags}</p>
      </div>
    );
  }
}

export default withFirebase(CourseView);
