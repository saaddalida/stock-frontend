import { combineReducers } from 'redux';

import stock from './stock/reducer';

export default combineReducers({
  stock,
});
