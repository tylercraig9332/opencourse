import React, { Component } from 'react';
import Navbar from './components/Navbar.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <p style={{alignItems: 'center'}}>Hello World</p>
      </div>
    );
  }
}

export default App;
