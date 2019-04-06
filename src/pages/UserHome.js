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

    let text = "User not signed in";
    if (this.state.authUser != null) {
      text = "Hello There, " + this.props.firebase.auth.currentUser.displayName;
    }
    console.log(this.props.firebase)
    return (
      <div>
        <Navbar />
        <p style={pStyle}>{text}</p>
        <p style={pStyle}> Your subscribed courses will appear here.</p>
      </div>
    )
  }
}

export default withFirebase(UserHome);

const pStyle = {
  margin: '2rem',
  textAlign: 'center',
  justifyContent: 'center',
  color: 'dimmgrey'
}
