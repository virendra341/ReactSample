import React from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from "redux"
import { persistStore, autoRehydrate } from "redux-persist"
import { routerReducer } from "react-router-redux"
import thunk from "redux-thunk"
import { Provider } from 'react-redux';
import { Router, Route, hashHistory, IndexRedirect, Redirect, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerMiddleware, push } from 'react-router-redux';
import reducers from './reducers'
import { } from 'babel-polyfill'
// import reducers from './reducers';
import 'bootstrap/dist/css/bootstrap.css';
// import App from './containers/App';

export const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  compose(applyMiddleware(thunk), autoRehydrate())
)
export const persistingStore = persistStore(store, { blacklist: ["routing"] })

export const conditionHistory = process.env.NODE_ENV === "development" ? hashHistory : browserHistory
const history = syncHistoryWithStore(hashHistory, store)

function scrollToTop() {
  window.scrollTo(0, 0);
}

export const requireAuth = async (nextState, replace) => {
  const authToken = localStorage.getItem("<Your project token>")
  if (!authToken) {
    hashHistory.push('login')
    window.location.reload(true)
    return false
  }
  return true
}

const rootRoute = {
  childRoutes: [{
    path: '/',
    component: require('./containers/App'),
    indexRoute: { onEnter: (nextState, replace) => replace('/login') },
    childRoutes: [
      require('./routes/app'),
      require('./routes/404'),
      require('./routes/500'),
      require('./routes/login'),
      require('./routes/signUp'),
      require('./routes/signupSuccess'),
      require('./routes/resetPassword'),
      require('./routes/forgotPassword'),
      require('./routes/forgotPasswordEmail'),

      require('./routes/dashboard'),
      {
        path: '*',
        indexRoute: { onEnter: (nextState, replace) => replace('/404') },
      }
    ]
  }]
};

render(
  <Provider store={store}>
    <Router
      onUpdate={scrollToTop}
      history={history}
      routes={rootRoute}
    />
  </Provider>,
  document.getElementById('app-container')
); 
