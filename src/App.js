import React, { Component } from 'react';
import { Switch, Route, BrowserRouter} from 'react-router-dom';

import './App.css';

import NavBar from './components/NavBar';
import Services from './components/Services';
import Contact from './components/Contact';
import Heading from './components/Heading';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div id="shape1" className="shape1"></div>
          <div id="shape2" className="shape2"></div>
          <NavBar />
          <Heading />
          <Services />
          <Contact />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
