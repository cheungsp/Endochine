import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import items from '../../data/items';
import './style.css';

class ItemsShow extends Component {

  render() {
    const id = Number(this.props.match.params.id);
    // const name = this.props.match.params.name;
    const item = items.filter((item) => item.id === id)[0];
    // let obj = items.find(o => o.id === id);
    // let obj = items;
    // console.log(obj);
    console.log(item.image);
    return (
      <div>
        <h3>
          name: {item.name}
          price: {item.price}
          description: {item.description}
        </h3>
          <img className="item-pic" src={`./img/${item.image}`}/>
          <img className="item-pic" src={`img/${this.props.image}`}/>
          {/* <img src={require(`img/${item.image}`)} /> */}
        <div className="navigateBack">
          <Link to="/">« Back to the index</Link>
        </div>
      </div>
    )
  }
}

export default ItemsShow;
