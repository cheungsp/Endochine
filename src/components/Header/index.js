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
      showAddressModal: false,
      is_pickup: true,
      is_delivery: false,
      date: 'Today',
      time: 'ASAP'
    };

    this.changePickupColour = this.changePickupColour.bind(this);
    this.changeDeliveryColour = this.changeDeliveryColour.bind(this);
    // this.onTargetSelect = this.onTargetSelect.bind(this);
    this.changeValueDate = this.changeValueDate.bind(this);
    this.changeValueTime = this.changeValueTime.bind(this);
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

  changePickupColour(){
      if ((this.state.is_pickup === false) && (this.state.is_delivery === true)) {
        this.setState({is_pickup: true})
        this.setState({is_delivery: false})
      }
      // console.log(this.state.is_pickup);
  }

  changeDeliveryColour(){
    if ((this.state.is_pickup === true) && (this.state.is_delivery === false)) {
      this.setState({is_pickup: false})
      this.setState({is_delivery: true})
    }
  }

  // function to change drop down menu title
  changeValueDate(e) {
    this.setState({date: e.currentTarget.textContent})
  }

  changeValueTime(e) {
    this.setState({time: e.currentTarget.textContent})
  }


  render() {
    // back ground colour for buttons
  let pickupColour = this.state.is_pickup ? "#ff4d4d" : "white"
  let deliveryColour = this.state.is_delivery ? "#ff4d4d" : "white"
  return (
    <div className="header">
      <Link to={'/'} className="home-link">
        <h1>ENDOCHINE</h1>
      </Link>
      <Nav bsStyle="tabs" justified>
        <NavItem eventKey={1} title="Order" className='navbar-tab' onClick={this.openDate} >Order For</NavItem>
        <NavItem eventKey={2} title="Address" className='navbar-tab' onClick={this.openAddress}>Enter Your Address</NavItem>
        <NavItem eventKey={3} title="Cart" ><Link to={`/cart`} className='cart-tab'>Cart</Link></NavItem>
      </Nav>

      <div>
       <Modal show={this.state.showDateModal} onHide={this.closeDate}>
         <Modal.Header closeButton>
           <Modal.Title className="text-center">When to order?</Modal.Title>
         </Modal.Header>
         <Modal.Body>
           {/* <div>
           <img className="logo-pic" src={`/img/logo.jpg`}/>
         </div> */}
           <div className="buttons-group">
           <Button
             className="delivery-button"
             bsStyle="default"
             bsSize="large"
             style={{backgroundColor: deliveryColour}}
             onClick={this.changeDeliveryColour}>
             DELIVERY
           </Button>
           <Button
             className="pickup-button"
            //  bsStyle="danger"
             bsStyle="default"
             bsSize="large"
             style={{backgroundColor: pickupColour}}
             onClick={this.changePickupColour}>
             PICKUP
           </Button>
         </div>
         <div className="pickup-dropdown">
           <DropdownButton
             className="date-dropdown"
             title={this.state.date}
             bsSize="large" >
             <MenuItem eventKey="1">
              <div onClick={this.changeValueDate}>Today</div>
            </MenuItem>
            <MenuItem eventKey="2">
               <div onClick={this.changeValueDate}>Tuesday, Sept 12th</div>
            </MenuItem>
             <MenuItem eventKey="3">
               <div onClick={this.changeValueDate}>Wednesday, Sept 13th</div>
             </MenuItem>
             <MenuItem eventKey="4">
               <div onClick={this.changeValueDate}>Thursday, Sept 14th</div>
             </MenuItem>
             <MenuItem eventKey="5">
               <div onClick={this.changeValueDate}>Friday, Sept 15th</div>
             </MenuItem>
             <MenuItem eventKey="6">
               <div onClick={this.changeValueDate}>Saturday, Sept 16th</div>
             </MenuItem>
             <MenuItem eventKey="7">
               <div onClick={this.changeValueDate}>Sunday, Sept 17th</div>
             </MenuItem>
           </DropdownButton>

           <DropdownButton
             className="time-dropdown"
             title={this.state.time}
             bsSize="large">
             <MenuItem eventKey="1">
               <div onClick={this.changeValueTime}>ASAP</div>
            </MenuItem>
             <MenuItem eventKey="2">
               <div onClick={this.changeValueTime}>3:00pm</div>
             </MenuItem>
             <MenuItem eventKey="3">
               <div onClick={this.changeValueTime}>3:30pm</div>
             </MenuItem>
             <MenuItem eventKey="4">
               <div onClick={this.changeValueTime}>4:00pm</div>
             </MenuItem>
             <MenuItem eventKey="5">
               <div onClick={this.changeValueTime}>4:30pm</div>
             </MenuItem>
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
