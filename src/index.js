import React from 'react';
import ReactDOM from 'react-dom'
import {WrapperApp, App} from './App'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware, Provider } from 'redux'
import catsReducer from './reducers/cats_reducer'

const store = createStore(catsReducer, applyMiddleware(thunk))

ReactDOM.render(
	<Provider store={store}>
    	<WrapperApp />
    </Provider>,
    document.getElementById('root')
);
