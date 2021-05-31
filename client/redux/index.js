import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

function appReducer(state = {}, action) {
  switch (action.type) {
    default:
      return state;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = composeEnhancers(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);

export default createStore(appReducer, middleware);
