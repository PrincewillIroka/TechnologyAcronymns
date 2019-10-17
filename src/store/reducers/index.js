import { combineReducers } from 'redux'
import homeReducer from './homeReducer'

const reducer = combineReducers({
  homeReducer: homeReducer
})

export default reducer
