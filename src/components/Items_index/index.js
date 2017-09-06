import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import items from '../../data/items';
import './style.css';
import ItemPreview from '../Item_preview/index'

class ItemsIndex extends Component {

  render() {
    return (
      <div className={['parent', 'container-fluid'].join(' ')}>
        <div className={['items-selector', 'row-fluid'].join(' ')}>
      {/* <div className="parent container-fluid"> */}
        {/* <div className="items-selector row-fluid"> */}
          {items.map(itemData => <ItemPreview key={itemData.id} {...itemData} />)}
        </div>
      </div>
    )
  }
}

export default ItemsIndex;
