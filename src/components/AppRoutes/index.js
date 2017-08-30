// src/components/AppRoutes.js
import React, { Component } from 'react';
import { Router, BrowserRouter } from 'react-router-dom';
import routes from '../../routes';

export default class AppRoutes extends Component {
  render() {
    return (
      <Router history={BrowserRouter} routes={routes} onUpdate={() => window.scrollTo(0, 0)}/>
    );
  }
}
