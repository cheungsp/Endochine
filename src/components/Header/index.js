import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import './style.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    return (
      <header className="header">
        <h1>Header</h1>
        <nav></nav>
      </header>
    );
  }
}

export default Header;
