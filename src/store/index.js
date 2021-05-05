import {createStore, combineReducers} from 'redux'
import userReducer from './user/userReducer'

const store = createStore(userReducer)

export default store