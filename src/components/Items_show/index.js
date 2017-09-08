import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import items from '../../data/items';
import './style.css';
import { Grid, Row, Col, Image } from 'react-bootstrap';

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
        {/* <img className="item-pic" src={`/img/${item.image}`}/> */}
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
                ${item.price} <br /><br />
              </h2>
              <p>
                {item.description}
              </p>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default ItemsShow;
