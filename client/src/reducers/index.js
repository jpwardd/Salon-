import { combineReducers } from 'redux'
import alert from './alert'
import auth from './auth'
import service from './service'
import misc from './misc'

export default combineReducers({
  alert,
  auth,
  service,
  misc
})