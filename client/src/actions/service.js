import { 
  CREATE_SERVICE_SUCCESS, 
  GET_SERVICES,
  SERVICE_ERROR
} from './types'
import axios from 'axios'
import { setAlert } from './alert'
import { loadUser } from './auth'

// Create a new service
export const createService = (name, price, category) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

 const body = JSON.stringify({ name, price, category })

  try {
    const res = await axios.post('/api/services', body, config)

    dispatch({
      type:  CREATE_SERVICE_SUCCESS,
      payload: res.data
    })
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
    }
    dispatch({
      type: SERVICE_ERROR
    })
  }
}

// GET services

export const getServices = () => async dispatch => {
  dispatch(loadUser())
  try {
    const res = await axios.get(`/api/services`)

    dispatch({
      type: GET_SERVICES,
      payload: res.data
    })

  } catch (err) {
    dispatch({
      type: SERVICE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status}
    })
  }
}