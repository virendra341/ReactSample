import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import loginReducer from './loginReducer'
import { reducer as formReducer } from 'redux-form'

const reducers = {
  routing: routerReducer,
  loginReducer,
  form: formReducer
};

module.exports = combineReducers(reducers);
