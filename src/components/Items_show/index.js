import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import items from '../../data/items';
import './style.css';

class ItemsShow extends Component {

  render() {
    // const id = this.props.params.id;
    // const id = this.props.id;
    // const item = items.filter((item) => item.id === id)[0];
    return (
      <div>

        this is a testttt
        <h3>
          <h1>{props.match.params.name}</h1>
        </h3>
        <div className="navigateBack">
          <Link to="/">« Back to the index</Link>
        </div>
      </div>
    )
  }
}

export default ItemsShow;
