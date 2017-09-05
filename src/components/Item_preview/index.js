import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';


export default class ItemPreview extends Component {
  render() {
    return (
        <div className="item-preview">
          <Link to={`/items/${this.props.id}`}>
          <img className="item-pic" src={`img/${this.props.image}`}/>
          <h2 className="name">{this.props.name}</h2>
        </Link>
        <h2 className="price">${this.props.price}</h2>
        </div>
    );
  }
}
