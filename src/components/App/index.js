import React, { Component } from 'react';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from '../Header/index';
import Footer from '../Footer/index';
import Cart from '../Cart/index';
import ItemsShow from '../Items_show/index';
import ItemsIndex from '../Items_index/index';
import './style.css';


class App extends Component {
  render() {
    return (
      <div className="wrapper">
      <Router>
        <div>
          <Header />
          <Switch>
            <Route path="/cart" component={Cart} />
            <Route path="/items/:id" component={ItemsShow} />
            <Route path="/" component={ItemsIndex} />
          </Switch>
        </div>
      </Router>
    </div>
    );
  }
}

// App.propTypes = {
//   children: PropTypes.element,
//   location: PropTypes.object,
//   "location.pathname": PropTypes.string
// };

export default App;
