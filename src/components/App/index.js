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

export default App;
