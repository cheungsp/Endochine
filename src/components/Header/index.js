import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './style.css';
import { Nav, NavItem, Modal, Button, MenuItem, DropdownButton } from 'react-bootstrap';

// import Modal from '../Modal/index';


class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showDateModal: false,
      showAddressModal: false
    };
  }

  closeDate = () => {
    this.setState({ showDateModal: false });
  }

  openDate = () => {
    this.setState({ showDateModal: true });
  }

  closeAddress = () => {
    this.setState({ showAddressModal: false });
  }

  openAddress = () => {
    this.setState({ showAddressModal: true });
  }

  render() {
  return (
    <div className="header">
      <Nav bsStyle="tabs" justified>
        <NavItem eventKey={1} title="Order" onClick={this.openDate} >Order For</NavItem>
        <NavItem eventKey={2} title="Date">Date & Time</NavItem>
        <NavItem eventKey={3} title="Address" onClick={this.openAddress}>Enter Your Address</NavItem>
      </Nav>

      <div>
       <Modal show={this.state.showDateModal} onHide={this.closeDate}>
         <Modal.Header closeButton>
           <Modal.Title className="text-center">When to order?</Modal.Title>
         </Modal.Header>
         <Modal.Body>
           <div className="buttons-group">
           <Button
             className="delivery-button"
             bsStyle="default"
             bsSize="large">
             DELIVERY
           </Button>
           <Button
             className="pickup-button"
             bsStyle="danger"
             bsSize="large">
             PICKUP
           </Button>
         </div>
         <div className="pickup-dropdown">
           <DropdownButton className="date-dropdown" title="Order For Today" bsSize="large">
             <MenuItem eventKey="1">Today</MenuItem>
             <MenuItem eventKey="2">Tuesday, Sept 12th</MenuItem>
             <MenuItem eventKey="3">Wednesday, Sept 13th</MenuItem>
             <MenuItem eventKey="4">Thursday, Sept 14th</MenuItem>
             <MenuItem eventKey="5">Friday, Sept 15th</MenuItem>
             <MenuItem eventKey="6">Saturday, Sept 16th</MenuItem>
             <MenuItem eventKey="7">Sunday, Sept 17th</MenuItem>
           </DropdownButton>

           <DropdownButton className="time-dropdown" title="ASAP" bsSize="large">
             <MenuItem eventKey="1">ASAP</MenuItem>
             <MenuItem eventKey="2">3:00pm</MenuItem>
             <MenuItem eventKey="3">3:30pm</MenuItem>
             <MenuItem eventKey="4">4:00pm</MenuItem>
             <MenuItem eventKey="5">4:30pm</MenuItem>
           </DropdownButton>

         </div>
         </Modal.Body>
         <Modal.Footer>
           <div className="footer-buttons">
           <Button className="update-button" bsStyle="default" bsSize="large">Update Results</Button>
           <br />
           <Button bsSize="small" onClick={this.closeDate}>Close</Button>
         </div>
         </Modal.Footer>
       </Modal>
     </div>

     <div>
      <Modal show={this.state.showAddressModal} onHide={this.closeAddress}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>ADDRESSSSSS</h4>
          <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
          <h4>Popover in a modal</h4>
          <hr />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.closeAddress}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>

    </div>
    )
  }
}

export default Header;
