import { combineReducers } from 'redux'
import alert from './alert'
import auth from './auth'
import service from './service'
import misc from './misc'
import client from './client'
import ticket from './ticket'

export default combineReducers({
  alert,
  auth,
  service,
  client,
  misc,
  ticket
})