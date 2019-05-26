import { 
  CREATE_SERVICE_SUCCESS, 
  CREATE_SERVICE_FAIL,
  GET_SERVICES,
  SERVICE_ERROR
} from './types'
import axios from 'axios'
import { setAlert } from './alert'

// Create a new service
export const createService = (name, price) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

 const body = JSON.stringify({ name, price })

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
      type: CREATE_SERVICE_FAIL
    })
  }
}

// GET services

export const getServices = () => async dispatch => {
  try {
    const res = await axios.get('/api/services')

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