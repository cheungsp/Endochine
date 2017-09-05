import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './style.css';

class Header extends Component {
  render() {
  return (
    <ul className="nav">
      <li>
        <NavLink activeClassName='active' to='/'>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName='active' to='/cart'>
          Cart
        </NavLink>
      </li>
    </ul>

    
  //   <div className="container">
  //
  //   <nav className="navbar navbar-default navbar-inverse bg-inverse navbar-static-top">
  //     <div className="container-fluid">
  //       <div className="navbar-header">
  //         <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
  //           <span className="sr-only">Toggle navigation</span>
  //           <span className="icon-bar"></span>
  //           <span className="icon-bar"></span>
  //           <span className="icon-bar"></span>
  //         </button>
  //         {/* <a className="navbar-brand" href="#">Project name</a> */}
  //       </div>
  //       <div id="navbar" className="navbar-collapse collapse">
  //         <ul className="nav navbar-nav">
  //           <li className="active"><NavLink to="/" href="#">🍎</NavLink></li>
  //           <li><NavLink to="/" href="#">Mac</NavLink></li>
  //           <li><NavLink to="/" href="#">iPhone</NavLink></li>
  //           <li><NavLink to="/" href="#">iPod</NavLink></li>
  //         </ul>
  //         <ul className="nav navbar-nav navbar-right">
  //           <li><NavLink to="/" href="#">Support</NavLink></li>
  //           <li><NavLink to="/" href="#">Search</NavLink></li>
  //           <li><NavLink to="/cart" href="#">Cart</NavLink></li>
  //           {/* <li><a href="../navbar/">Default</a></li> */}
  //           {/* <li className="active"><a href="./">Static top <span className="sr-only">(current)</span></a></li> */}
  //           {/* <li><a href="../navbar-fixed-top/">Fixed top</a></li> */}
  //         </ul>
  //       </div>
  //     </div>
  //   </nav>
  // </div>
    )
  }
}

export default Header;
