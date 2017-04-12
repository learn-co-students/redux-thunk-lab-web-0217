import React from 'react';
import ReactDOM from 'react-dom'
import WrapperApp from './App'
import { Provider, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import catsReducer from '../src/reducers/cats_reducer'
const store = createStore(catsReducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store} >
    <WrapperApp />
  </Provider>,
    document.getElementById('root')
);
