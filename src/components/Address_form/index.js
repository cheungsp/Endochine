import React, { Component } from 'react';
import './style.css';
import { Button } from 'react-bootstrap';

class AddressForm extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Address submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
        <label className="address_label">
          STREET ADDRESS
          <input type="text" className="address_input" value={this.state.value} onChange={this.handleChange} />
        </label>
        <br />
        <div className="text-center">
        <Button
          className="address_button"
          bsStyle="default"
          bsSize="large"
          type="submit"
          value="Submit">
          Confirm Address
        </Button>
      </div>
      </form>
    </div>
    );
  }
}


export default AddressForm;
