import React, { Component } from 'react';
import Navbar from './components/Navbar.js';
import Launch from './pages/Launch.js';

export default class Home extends Component {

  render() {
    return (
      <div>
        <Navbar />
        <Launch />
      </div>
    );
  }
}
