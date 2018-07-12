import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import settings from './settings'
import userReducer from './userReducer'
import signupReducer from './signupReducer'
import { reducer as formReducer } from 'redux-form'

const reducers = {
  routing: routerReducer,
  settings,
  userReducer,
  signupReducer,
  form: formReducer
};

module.exports = combineReducers(reducers);
