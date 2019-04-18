import {combineReducers} from 'redux';
import items from './items';
import fruits from './fruits';

const rootReducer = combineReducers({
  todos: items,
  fruits
});

export default rootReducer;