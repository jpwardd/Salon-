import {
  CREATE_CLIENT_SUCCESS,
  GET_CLIENTS,
  CLIENT_ERROR
} from '../actions/types'


const initialState = {
  clients: [],
  client: null,
  loading: true,
  error: {}
}

export const clientReducer = (state = initialState, action) => {
  const { type, payload} = action;

  switch(type) {
    case CREATE_CLIENT_SUCCESS:
      return { ...state, ...payload }
    case GET_CLIENTS:
      return { ...state, clients: payload, loading: false }
    case CLIENT_ERROR:
      return { ...state, error: payload, loading: false}
    default:
      return state
  }
}