import React, { Component } from 'react';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from '../Header/index';
import Footer from '../Footer/index';
import Cart from '../../containers/Cart/index';
import ItemsShow from '../Items_show/index';
import ItemsIndex from '../Items_index/index';
import Image from '../Image/index';
import './style.css';
import Wallpaper from '../../image/wallpaper.jpg';

let sectionStyle = {
  // width: "100%",
  // height: "100%",
  // backgroundImage: `url(${Wallpaper})`,
  // opacity: 0.2
};


class App extends Component {

  // var sectionStyle = {
  //   width: "100%",
  //   height: "400px",
  //   backgroundImage: "url(" + { wallpaper.jpg } + ")"
  // };
  /* <img className="background-pic" src={`img/wallpaper.jpg`} /> */

  render() {
    return (
      <div className="wrapper">
      {/* <div className="wrapper" style={ sectionStyle }> */}
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
