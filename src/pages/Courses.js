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
    this.props.firebase.courses().on('value', snap => {
      let data = snap.val()
      alert(data)
      this.setState({courses: data, loading: false})
    })

  }

  render() {
    return (
      <div>
      {this.state.courses}
      </div>
    );
  }
}

export default withFirebase(Courses);
