import React from 'react';
import ReactDOM  from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import App from './components/App';
import rootReducer from './reducers'

import {fetchMemes} from './actions'


const store = createStore(rootReducer, applyMiddleware(thunk));


//let subscribe to our fetch function to see what our store looks like
store.subscribe(() => console.log('store', store.getState()))
store.dispatch(fetchMemes())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root')
)
