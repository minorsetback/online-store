import { combineReducers } from 'redux';

import { storeReducer as store } from '../bus/store/reducer';

export const rootReducer = combineReducers({
  store
});
