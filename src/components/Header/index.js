import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './style.css';
import { Nav, NavItem } from 'react-bootstrap';

import Modal from '../Modal/index';


class Header extends Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: false };
  };

  toggleModal = () => {
    console.log('modaleee')
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  // const NavJustified = React.createClass({
  // handleSelect(selectedKey) {
  //   alert('selected ' + selectedKey);
  // }
  testfunction(){
    console.log('jello')
  }

  render() {
  return (
    // <div className="navbar-header">
    // <div className="header">
    //   <Nav bsStyle="tabs" justified activeKey={1} onSelect={this.toggleModal}>
    //     <NavItem eventKey={1} title="Order">Order For</NavItem>
    //     <NavItem eventKey={2} title="Date">Date & Time</NavItem>
    //     <NavItem eventKey={3} title="Address">Enter Your Address</NavItem>
    //   </Nav>
    <div className="App">
       <button onClick={this.toggleModal}>
         Open the modal
       </button>

       <Modal show={this.state.isOpen}
         onClose={this.toggleModal}>
         Here's some content for the modal
       </Modal>
     </div>
    // </div>
    )
  }
}

export default Header;
