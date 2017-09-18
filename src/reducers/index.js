// import { combineReducers } from 'redux';
// import ItemsReducer from './reducer_items';
//
// const rootReducer = combineReducers({
//   items: ItemsReducer
// });
//
// export default rootReducer;

import { combineReducers } from 'redux';
import ItemReducer from './item-reducer';

const rootReducer = combineReducers({
  items: ItemReducer
});

export default rootReducer;
