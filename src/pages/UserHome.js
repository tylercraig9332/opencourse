import React, { Component } from 'react';
import Navbar from '../components/Navbar.js';

import { withFirebase } from '../components/Firebase';

class UserHome extends Component {
  constructor(props) {
    super(props);
    this.state = {authUser: null};
  }

  componentDidMount() {
    this.props.firebase.auth.onAuthStateChanged(authUser => {
      authUser ? this.setState({authUser}) :
      this.setState({authUser: null});
    })
  }

  render () {

    let text = "user not signed in";
    if (this.state.authUser != null) {
      text = "Hello There, you have succefully signed in";
    }
    return (
      <div>
        <Navbar />
        <p>{text}</p>
      </div>
    )
  }
}

export default withFirebase(UserHome);
