import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import combineReducers from './reducers/index';
import { projectsState } from './reducers/projectsReducer';

const { NODE_ENV } = process.env;

const middlewares = [thunk];

const enableDevTools = NODE_ENV === 'development'
  ? composeWithDevTools(applyMiddleware(...middlewares))
  : applyMiddleware(...middlewares);

export default createStore(
  combineReducers,
  {
    projects: projectsState,
  },
  enableDevTools,
);
