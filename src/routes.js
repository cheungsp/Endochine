import React from 'react';
import { Router, Route } from 'react-router';

import App from './components/App';
// import About from './components/About';
// import NotFound from './components/NotFound';

export default (
  <Route path="/" component={App}>
    {/* <IndexRoute component={Main} /> */}
    {/* <Route path="item/:id" component={ItemPage} /> */}
    {/* <Route path="profile" component={Profile} /> */}
    {/* <Route path="login" component={Login} /> */}
    {/* <Route path="trades" component={Trades} /> */}
    {/* <Route path="myItems" component={MyItems} /> */}
    {/* <Route path="*" component={ErrorPage} /> */}
  </Route>
);
