import { combineReducers } from 'redux';
import ItemsReducer from './reducer_items';

const rootReducer = combineReducers({
  items: ItemsReducer
});

export default rootReducer;
