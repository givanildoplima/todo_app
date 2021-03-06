import React from 'react'
import ReactDOM from 'react-dom'
import {applyMiddleware, createStore} from 'redux'

import promise from 'redux-promise'
import multi from 'redux-multi'
import thank from 'redux-thunk'

import { Provider } from 'react-redux'

import App from './main/app'
import Reducers from './main/reducers'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ 
&& window.__REDUX_DEVTOOLS_EXTENSION__()

const store = applyMiddleware(thank, multi, promise)(createStore)(Reducers, devTools)
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('app'))