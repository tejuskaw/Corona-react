import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import App from './components/App.js'
import store from './Reducers'

ReactDOM.render(
  <Provider store={createStore(store, applyMiddleware(thunk))}>
    <App />
  </Provider>,
  document.getElementById('root')
)
