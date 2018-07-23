import React, { Component } from 'react';
import './App.css';

import NavBar from './components/NavBar';

class App extends Component {
  render() {
    return (
      <div className="App">
      <div id="shape1" class="shape1"></div>
      <div id="shape2" class="shape2"></div>
      <NavBar />
      <h1>Test H1</h1>
      <h2>TestH2</h2>
      <p>jskjhfkjshfjkshfjkskjfhsd</p>

      </div>
    );
  }
}

export default App;
