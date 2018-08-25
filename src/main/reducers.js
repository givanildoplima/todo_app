 import {combineReducers}  from 'redux'
import TodoReducers from '../todo/todoReducers';

const rootReducer = combineReducers ({
    todo: TodoReducers
})

export default rootReducer