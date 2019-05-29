import {
  CREATE_CLIENT_SUCCESS,
  GET_CLIENTS,
  CLIENT_ERROR
} from '../actions/types'


const initialState = {
  contacts: [],
  contact: null,
  loading: true,
  error: {}
}

export default function(state = initialState, action) {
  const { type, payload} = action;

  switch(type) {
    case CREATE_CLIENT_SUCCESS:
      return { ...state, ...payload }
    case GET_CLIENTS:
      return { ...state, contacts: payload, loading: false }
    case CLIENT_ERROR:
      return { ...state, error: payload, loading: false}
    default:
      return state
  }
}