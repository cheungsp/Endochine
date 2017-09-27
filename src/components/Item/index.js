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
        <span>{item.name}</span> - $<span className="pricetag">{item.price.toFixed(2)}</span>
        <br/>
        <span
          onClick={this.handleClick.bind(this)}
          // className="remove-link"
          className={['remove-link', 'text-right'].join(' ')}
          >Remove</span>
      </li>
    );
  }
}

export default connect(null, actions)(Item);
