import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import Item from '../../components/Item/index';
import { Grid, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class App extends Component {
 state = { item: '' };

 componentWillMount() {
   this.props.fetchItems();
   this.forceUpdate()
 }

 componentDidMount() {
  //  let elements = document.getElementsByClassName('pricetag');
  //  let allElements = Array.prototype.slice.call(elements);
  //  let sum_array = allElements.map(function(x) {
  //    return parseInt(x.innerHTML);
  //  });
  //  let total_sum = sum_array.reduce(function(sum, value) {
  //    return sum + value;
  //   }, 0);
  //   console.log(total_sum);
 }

 handleInputChange(event) {
   this.setState({ item: event.target.value });
 }

 handleFormSubmit(event) {
   event.preventDefault();
   this.props.createItem(this.state.item, Math.floor(Math.random() * 20))
 }

 renderItems() {
   return _.map(this.props.items, (item, key) => {
     return <Item key={key} item={item} id={key} />
   });
 }


 render() {
   let elements = document.getElementsByClassName('pricetag');
   let allElements = Array.prototype.slice.call(elements);
   let sum_array = allElements.map(function(x) {
     return parseFloat(x.innerHTML);
   });
   let total_sum = sum_array.reduce(function(sum, value) {
     return sum + value;
    }, 0);

   return (
     <div className="text-center">
       <Grid>
         <Row className="show-grid">
           <Col xs={12} sm={12} md={12}>
             <ul className="list-group">
               {this.renderItems()}
             </ul>
             <span><h2>Total: ${total_sum}</h2></span>
             <Link to="/">« Go Back to All Items</Link>
           </Col>
         </Row>
       </Grid>
     </div>
   );
 }
}

function mapStateToProps(state) {
 return { items: state.items };
}

export default connect(mapStateToProps, actions)(App)
