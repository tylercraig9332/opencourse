import React, { Component } from 'react';
import { withFirebase } from '../components/Firebase';
import NavHome from './NavHome.js';
import NavGuest from './NavGuest.js';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: null
    }
  }

  componentDidMount() {
    this.props.firebase.auth.onAuthStateChanged(auth => {
      auth ? this.setState({auth}) :
      this.setState({auth: null});
    })
  }

  render() {
    if (this.state.auth != null)
      return <NavHome />
    else {
      return <NavGuest />
    }
  }
}

export default withFirebase(NavBar);
