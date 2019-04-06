import React, {Component} from 'react';
import {withFirebase} from '../components/Firebase';
import Navbar from '../components/Navbar.js';

import CourseCard from '../components/CourseCard.js'

class Courses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: [],
      loading: false
    };
    //this.docRef = this.docRef.bind(this)
  }

  componentDidMount() {
    this.setState({loading: true})
    let c = [];
    this.docRef = this.props.firebase
     this.docRef.firestore().collection('courses').onSnapshot(snap => {
       snap.forEach(doc =>
       c.push({...doc.data()}))
     });
     this.setState({
       courses: c
     })
  }

  componentDidUnMount() {
    this.docRef()
  }

  render() {
    const cards = this.state.courses.map(course => {
      return <CourseCard data={course}/>
    })

    return (
      <div>
      <Navbar />
      {cards}
      </div>
    );
  }
}

export default withFirebase(Courses);
