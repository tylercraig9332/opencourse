import React, { Component } from 'react';
import Navbar from './components/NavHome.js';
import Launch from './pages/Launch.js';

export default class Home extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Navbar />
        <Launch />
      </div>
    );
  }
}
