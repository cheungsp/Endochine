import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import items from '../../data/items';
import './style.css';
import ItemPreview from '../Item_preview/index'

class ItemsIndex extends Component {

  render() {
    return (
      <div id="parent">

        <div className="items-selector">
          {items.map(itemData => <ItemPreview key={itemData.id} {...itemData} />)}
        </div>

        {/* <Link to={`/cart/${3}`}>
        <div className="itemIcon">
          <div className="content">
            1
          </div>
        </div>
      </Link>
        <div className="itemIcon">
          <div className="content">
            2
          </div>
        </div>
        <div className="itemIcon">
          <div className="content">
            3
          </div>
        </div> */}
      </div>
    )
  }
}

export default ItemsIndex;
