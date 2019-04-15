import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import './styles.css';

class Navigation extends Component {
  render() {
    return (
      <nav className="navigation">
        <NavLink to="/" className="nav-item" activeClassName="active-nav-item" exact>Main</NavLink>
        <NavLink to="/books" className="nav-item" activeClassName="active-nav-item" exact>Books</NavLink>
        <NavLink to="/cart" className="nav-item" activeClassName="active-nav-item" exact>Cart</NavLink>
      </nav>
    );
  }
}

export default Navigation;
