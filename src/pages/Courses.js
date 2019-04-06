import React, {Component} from 'react';
import {withFirebase} from '../components/Firebase';
import Navbar from '../components/Navbar.js';

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
     console.log(c)
  }

  componentDidUnMount() {
    this.docRef()
  }

  render() {
    
    return (
      <div>
      <Navbar />
      {this.state.courses}
      </div>
    );
  }
}

export default withFirebase(Courses);
