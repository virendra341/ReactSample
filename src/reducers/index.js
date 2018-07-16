import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import settings from './settings'
import userReducer from './userReducer'
import signupReducer from './signupReducer'
import loginReducer from './loginReducer'
import {resetPasswordReducer,forgotPasswordReducer} from './forgotPasswordReducer'
import { reducer as formReducer } from 'redux-form'

const reducers = {
  routing: routerReducer,
  settings,
  userReducer,
  signupReducer,
  loginReducer,
  forgotPasswordReducer,
  resetPasswordReducer,
  form: formReducer
};

module.exports = combineReducers(reducers);
