import {
  CREATE_SERVICE_SUCCESS,
  GET_SERVICES,
  SERVICE_ERROR
} from '../actions/types'


const initialState = {
  services: [],
  service: null,
  loading: true,
  error: {}
}

export default function(state = initialState, action) {
  const { type, payload} = action;

  switch(type) {
    case CREATE_SERVICE_SUCCESS:
      return { ...state, ...payload }
    case GET_SERVICES:
      return { ...state, services: payload, loading: false}
    case SERVICE_ERROR:
      return { ...state, error: payload, loading: false}
    default:
      return state
  }
}