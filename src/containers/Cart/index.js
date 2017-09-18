// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
//
// import './style.css';
//
// class Cart extends Component {
//
//   renderList() {
//     return this.props.items.map((item) => {
//       return (
//         <li key={item.title} className="list-group-item">{item.title}</li>
//       )
//     })
//   }
//
//   render() {
//     return (
//       <div className="text-center">
//         Cart is coming soon.
//         <br />
//         <Link to="/">« Go Back to All Items</Link>
//         <ul className="list-group col-sm-4">
//           {this.renderList()}
//         </ul>
//       </div>
//     )
//   }
// }
//
// function mapStateToProps(state) {
//   // Whatever is returned will show up as props inside of Booklist
//
//   return {
//     items: state.items
//   };
// }
//
// // produces the container
// export default connect(mapStateToProps)(Cart);


import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import Item from '../../components/Item/index';

class App extends Component {
 state = { item: '' };

 componentWillMount() {
   this.props.fetchItems();
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
   return (
     <div>
       <h4>Items in your cart</h4>
       {/* <form onSubmit={this.handleFormSubmit.bind(this)} className="form-inline">
         <div className="form-group">
           <input
             className="form-control"
             placeholder="Add Item"
             value={this.state.item}
             onChange={this.handleInputChange.bind(this)} />
           <button action="submit" className="btn btn-primary">Add</button>
         </div>
       </form> */}
       <ul className="list-group">
         {this.renderItems()}
       </ul>
     </div>
   );
 }
}

function mapStateToProps(state) {
 return { items: state.items };
}

export default connect(mapStateToProps, actions)(App)
