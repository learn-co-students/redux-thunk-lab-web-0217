import React from 'react';
import ReactDOM from 'react-dom'
import { App, WrapperApp } from './App'
import thunk from 'redux-thunk'
import { Provider, createStore, applyMiddleware  } from 'redux';
import cats_reducer from './reducers/cats_reducer'


const store = createStore(cats_reducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <WrapperApp />
  </Provider>,
    document.getElementById('root')
);
