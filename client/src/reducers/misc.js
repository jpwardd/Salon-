import { TOGGLE, USER_LOADED } from '../actions/types'

const initialState = {
  isOpen: false,
  isAuthenticated: null,
  user: null
}

export default function(state = initialState, action) {
  const { type, payload } = action
  switch(type) {
    case USER_LOADED:
       return { ...state, isAuthenticated: true, loading: false, user: payload }
    case TOGGLE:
      return { ...state, isAuthenticated: true, isOpen: true}
    default:
      return state;
  }
}