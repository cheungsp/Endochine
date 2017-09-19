import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import './style.css';
import items from '../../data/items';

class Item extends Component {
  handleClick() {
    this.props.deleteItem(this.props.id);
  }

  render() {
    const name = String(this.props.item);
    const item = items.filter((item) => item.name === name)[0];
    return (
      <li className="list-group-item">
        {/* {this.props.item} */}
        <span>{item.name}</span> - $<span className="pricetag">{item.price.toFixed(2)}</span>
        <button
          onClick={this.handleClick.bind(this)}
          className="btn btn-danger right">
          Delete
        </button>
      </li>
    );
  }
}

export default connect(null, actions)(Item);
