import React, { Component } from 'react';
import { withFirebase } from '../components/Firebase';
import Navbar from '../components/Navbar.js';

import NewSectionDropDown from '../components/EditCourse/NewSection.js';

class EditCourse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stack: []
    }
  }

  componentDidMount() {
    this.props.firebase.auth.onAuthStateChanged(auth => {
      if (auth == null)
        window.location.href = '/login';
    });
  }

  render() {
    return (
      <div>
        <Navbar />
        {this.state.stack}
        <NewSectionDropDown stack={this.state.stack} />
      </div>
    );
  }

}

export default withFirebase(EditCourse);

const editStyle = {
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
  width: '65%'
};
