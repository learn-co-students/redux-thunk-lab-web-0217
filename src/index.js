import React from 'react';
import ReactDOM from 'react-dom'
import App from './App'
import thunk from 'redux-thunk'

import rootReducer from './reducers'
import App from './App'

export function configureStore() {
  return createStore(rootReducer, applyMiddleware(thunk))
}

ReactDOM.render(
  <Provider store={configureStore()}
    <App />,
  </Provider>
  document.getElementById('root')
);
