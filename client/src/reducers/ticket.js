import {
  CREATE_TICKET_SUCCESS,
  GET_TICKETS,
  TICKET_ERROR
} from '../actions/types'

const initialState = {
  tickets: [],
  ticket: null,
  loading: true,
  error: {}
}

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch(type) {
    case CREATE_TICKET_SUCCESS:
      return { ...state, ...payload }
    case GET_TICKETS:
      return { ...state, tickets: payload, loading: false }
    case TICKET_ERROR:
      return { ...state, error: payload, loading: false }
    default:
      return state
  }
}