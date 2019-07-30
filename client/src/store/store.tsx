import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk, { ThunkMiddleware } from 'redux-thunk'
import { alertReducer } from '../reducers/alert';
import { authReducer } from '../reducers/auth';
import { serviceReducer } from '../reducers/service';
import { clientReducer } from '../reducers/client';
import { ticketReducer } from '../reducers/ticket';
const initialState = {};

const rootReducer = combineReducers({
  alert: alertReducer,
  auth: authReducer,
  services: serviceReducer,
  client: clientReducer,
  ticket: ticketReducer
})

export type AppState = ReturnType<typeof rootReducer>

const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(thunk as ThunkMiddleware<AppState>)))

export default store;