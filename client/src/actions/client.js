import {
  CREATE_CLIENT_SUCCESS,
  GET_CLIENTS,
  CLIENT_ERROR,
} from '../actions/types';
import axios from 'axios';
import { setAlert } from './alert'
import { loadUser } from './auth'


export const createClient = (firstName, lastName, phoneNumber, email, employee) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

 const body = JSON.stringify({ firstName, lastName, phoneNumber, email, employee })

  try {
    const res = await axios.post('/api/contacts', body, config)

    dispatch({
      type:  CREATE_CLIENT_SUCCESS,
      payload: res.data
    })
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
    }
    dispatch({
      type: CLIENT_ERROR
    })
  }
}

// GET contacts

export const getClients = () => async dispatch => {
  dispatch(loadUser())
  try {
    const res = await axios.get('/api/contacts')

    dispatch({
      type: GET_CLIENTS,
      payload: res.data
    })

  } catch (err) {
    dispatch({
      type: CLIENT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status}
    })
  }
}