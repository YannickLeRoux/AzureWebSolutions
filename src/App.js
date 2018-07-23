import React, { Component } from 'react';
import { Switch, Route, BrowserRouter} from 'react-router-dom';

import './App.css';

import NavBar from './components/NavBar';
import Services from './components/Services';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
        <div id="shape1" class="shape1"></div>
        <div id="shape2" class="shape2"></div>
        <NavBar />
        <Services />
        <h1>Test H1</h1>
        <h2>TestH2</h2>
        <p>jskjhfkjshfjkshfjkskjfhsd</p>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
