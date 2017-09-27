import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import items from '../../data/items';
import './style.css';
import { Grid, Row, Col, Image } from 'react-bootstrap';

import _ from 'lodash';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import Item from '../../components/Item/index';

class ItemsShow extends Component {
  state = { item: this.props.match.params.id };

  componentWillMount() {
    this.props.fetchItems();
  }
  handleFormSubmit(event) {
    const id = Number(this.props.match.params.id);
    const item = items.filter((item) => item.id === id)[0];
    event.preventDefault();

    this.props.createItem(item.name, Math.floor(Math.random() * 20));
    alert('Added to cart item ' + ` ${item.name}`);
  }

  renderItems() {
    return _.map(this.props.items, (item, key) => {
      return <Item key={key} item={item} id={key} />
    });
  }


  render() {
    const id = Number(this.props.match.params.id);
    const item = items.filter((item) => item.id === id)[0];
    return (
      <div>
        <Grid>
          <Row className="show-grid">
            <Col xs={12} sm={6} md={6}>
              <div className="pic-hold">
                <img className="food-pic" src={`/img/${item.image}`}/>
              </div>
            </Col>
            <Col xs={12} sm={6} md={6}>
              <div className="navigateBack">
                <Link to="/">« All Items</Link>
              </div>
              <h3>
                {item.name} <br/>
              </h3>
              <h2>
                ${item.price.toFixed(2)} <br /><br />
              </h2>
              <p>
                {item.description}
              </p>
              <br />
              <div className="text-center">
                {/* <Button className="addToCartButton" bsStyle="default" bsSize="large">Add To Cart</Button> */}
                <form onSubmit={this.handleFormSubmit.bind(this)} className="form-inline">
                  <div className="form-group">
                    {/* <input
                      className="form-control"
                      placeholder="Add Item"
                      value={this.state.item}
                      onChange={this.handleInputChange.bind(this)} /> */}
                      {/* <Button className="addToCartButton" action="submit" bsStyle="default" bsSize="large">Add To Cart</Button> */}
                    <button action="submit" className="btn btn-primary">Add to Cart</button>
                  </div>
                </form>

              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

// export default ItemsShow;
function mapStateToProps(state) {
 return { items: state.items };
}

export default connect(mapStateToProps, actions)(ItemsShow)
