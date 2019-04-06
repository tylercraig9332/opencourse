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

  componentDidMount() {
    this.props.firebase.auth.onAuthStateChanged(auth => {
      if (auth == null)
        window.location.href = '/login';
    });
  }

  render() {
    return (
      <div>
      </div>
    )
  }
}

export default withFirebase(NewCourse);
