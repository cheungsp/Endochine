import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './style.css';
import { Nav, NavItem, Modal, Button, MenuItem, DropdownButton } from 'react-bootstrap';

// import Modal from '../Modal/index';


class AddressModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showAddressModal: false
    };
  }

  closeAddress = () => {
    this.setState({ showAddressModal: false });
  }

  openAddress = () => {
    this.setState({ showAddressModal: true });
  }


  render() {
  return (
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
    )
  }
}

export default AddressModal;
