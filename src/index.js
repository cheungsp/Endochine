import React from 'react';
import ReactDOM, { render } from 'react-dom';
// import { Router, browserHistory } from 'react-router-dom';
// import { BrowserRouter, Route, Link } from 'react-router-dom';
import AppRoutes from './components/AppRoutes/index';
// import routes from './routes';
import App from './components/App/index';

// window.onload = () => {
//   ReactDOM.render(<AppRoutes/>, document.getElementById('app'));
// };

// window.onload = () => {
//   render(<App />, document.getElementById('app'));
// };

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import './style/style.css';
//
// import reducers from './reducers';
// import Cart from './components/Cart/index';
// import ItemsShow from './components/Items_show/index';
// import ItemsIndex from './components/Items_index/index';
//
// const createStoreWithMiddleware = applyMiddleware()(createStore);
//
// ReactDOM.render(
//   <Provider store={createStoreWithMiddleware(reducers)}>
    // <BrowserRouter>
    //   <div>
    //     <Switch>
    //       <Route path="/cart" component={Cart} />
    //       <Route path="/items/:id" component={ItemsShow} />
    //       <Route path="/" component={ItemsIndex} />
    //     </Switch>
    //   </div>
    // </BrowserRouter>
//   </Provider>
//   , document.querySelector('.container'));
