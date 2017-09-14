import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './style.css';

class Cart extends Component {

  renderList() {
    return this.props.items.map((item) => {
      return (
        <li key={item.title} className="list-group-item">{item.title}</li>
      )
    })
  }

  render() {
    return (
      <div className="text-center">
        Cart is coming soon.
        <br />
        <Link to="/">« Go Back to All Items</Link>
        {/* <ul className="list-group col-sm-4">
          {this.renderList()}
        </ul> */}
      </div>
    )
  }
}

function mapStateToProps(state) {
  // Whatever is returned will show up as props inside of Booklist

  return {
    items: state.items
  };
}

// produces the container
export default connect(mapStateToProps)(Cart);
