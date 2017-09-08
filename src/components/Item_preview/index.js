import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import { Image } from 'react-bootstrap';

export default class ItemPreview extends Component {
  render() {
    return (
        // <div className="item-preview span2">
        // [styles.foo, styles.bar].join(' ')
        <div className={['item-preview', 'span9'].join(' ')}>
          <Link to={`/items/${this.props.id}`}>
            {/* <img className="item-pic" src={`img/${this.props.image}`} responsive/> */}
            <img className="item-pic" src={`img/${this.props.image}`} />
            <h2 className="name">{this.props.name}</h2>
          </Link>
          <h2 className="price">${this.props.price}</h2>
        </div>
    );
  }
}
