import React from 'react';
// import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './style/style.css';

// import reducers from './reducers';
import Cart from './components/Cart/index';
import ItemsShow from './components/Items_show/index';
import ItemsIndex from './components/Items_index/index';

const routes = (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/cart" component={Cart} />
        <Route path="/items/:id" component={ItemsShow} />
        <Route path="/" component={ItemsIndex} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default routes
