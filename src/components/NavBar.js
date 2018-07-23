import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
// import '../assets/css/Navigation.css';

import {
  Collapse,
  NavbarToggler,
  Nav,
  NavItem,
   } from 'reactstrap';

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <header>
        <nav className="navbar navbar-light navbar-expand-md navigation-clean">
          <div className="container">
            <Link className="navbar-brand" to='/'>Azure Web Solutions</Link>

            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="nav navbar-nav ml-auto" navbar>

                <NavItem>
                  <NavLink className="nav-link" to='/services'>Services</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to='/portfolio'>Portfolio</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to='/blog'>Blog</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to='/contact'>Contact</NavLink>
                </NavItem>

              </Nav>
            </Collapse>
          </div>
        </nav>
      </header>

    );
  }
}

export default NavBar;