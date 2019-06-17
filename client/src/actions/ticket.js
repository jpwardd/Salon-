import {
  CREATE_TICKET_SUCCESS,
  GET_TICKETS,
  TICKET_ERROR
} from './types';
import axios from 'axios';
import { setAlert } from './alert';
import { loadUser } from './auth';

export const createTicket = (service, client, employee, bookingInfo) => async dispatch => {
  dispatch(loadUser())
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  const body = JSON.stringify({ service, client, employee, bookingInfo });

  try {
    const res = await axios.post('/api/tickets', body, config)

    dispatch({
      type: CREATE_TICKET_SUCCESS,
      payload: res.data
    })
  } catch (err) {
     const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
    }
    dispatch({
      type: TICKET_ERROR
    })
  }
}

export const getTickets = () => async dispatch => {
  dispatch(loadUser())
  try {
    const res = await axios.get(`/api/tickets`)

    dispatch({
      type: GET_TICKETS,
      payload: res.data
    })

  } catch (err) {
    dispatch({
      type: TICKET_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status}
    })
  }
}