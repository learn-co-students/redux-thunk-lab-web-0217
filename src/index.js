import React from 'react';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import rootReducer from './reducers'
import App from './App'

export const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
}

ReactDOM.render(
    <Provider store={configureStore()}>
      <App />
    </Provider>,
    document.getElementById('root')
);
