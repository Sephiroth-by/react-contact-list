import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducer from './reducers/reducer'
import App from './components/App'
import thunkMiddleware from 'redux-thunk'
import Actions from './actions/actions'

let store = createStore(reducer, applyMiddleware(thunkMiddleware))

store.dispatch(Actions.getContactsAPI());

render(
  <Provider store={store}>
    <App />
  </Provider>,
document.getElementById('app')
)