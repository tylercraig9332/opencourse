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
  }

  componentDidMount() {
    this.setState({loading: true})
     let docRef = this.props.firebase.firestore().collection('courses');
     console.log(docRef);
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
