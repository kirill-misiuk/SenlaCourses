import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import './styles.css';

class Navigation extends Component {
  render() {
    return (
      <nav className="navigation">
        <NavLink to="/" className="nav-item" activeClassName="active-nav-item" exact>Main</NavLink>
      </nav>
    );
  }
}

export default Navigation;
