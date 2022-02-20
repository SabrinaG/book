import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import books from './books/reducers';

const rootReducer = combineReducers({ books });

const initialState = {};

const thunkMiddleware = applyMiddleware(thunk);
const reduxDevToolsEnabled = window.__REDUX_DEVTOOLS_EXTENSION__;
const reduxMiddleware = reduxDevToolsEnabled
  ? compose(thunkMiddleware, window.__REDUX_DEVTOOLS_EXTENSION__())
  : compose(thunkMiddleware);

// eslint-disable-next-line import/no-anonymous-default-export
export default (initialStateArg = initialState) => createStore(rootReducer, initialStateArg, reduxMiddleware);
