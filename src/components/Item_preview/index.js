import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';


export default class ItemPreview extends Component {
  render() {
    return (
      <Link to={`/items/${this.props.id}`}>
        <div className="item-preview">
          {/* <img src={`../../img/${this.props.image}`}/> */}
          <img src={`img/${this.props.image}`}/>
          <h2 className="name">{this.props.name}</h2>
          <h2 className="price">{this.props.price}</h2>
        </div>
      </Link>
    );
  }
}
