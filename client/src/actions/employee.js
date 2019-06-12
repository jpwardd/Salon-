

import { CREATE_EMPLOYEE_SUCCESS, CREATE_EMPLOYEE_FAIL, GET_EMPLOYEES, GET_EMPLOYEES_FAIL, GET_EMPLOYEES_ERROR } from "./types";
import axios from 'axios'
import { setAlert } from './alert'
import { loadEmployee, loadUser } from "./auth";

// Register Employee
export const createEmployee = ({name, email, password }) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }


  const body = JSON.stringify({name, email, password });
  
  dispatch(loadUser())
  try {
    const res = await axios.post('/api/employees', body, config);
    dispatch({
      type: CREATE_EMPLOYEE_SUCCESS,
      payload: res.data
    });

    
  } catch (err) {
    const errors = err.response.data.errors;
    
    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
    }
    dispatch({
      type: CREATE_EMPLOYEE_FAIL
    })
  }
}

export const getEmployees = () => async dispatch => {
  dispatch(loadUser())
  try {
    const res = await axios.get('/api/users')

    dispatch({
      type: GET_EMPLOYEES,
      payload: res.data
    })
  } catch (err) {
    dispatch({
      type: GET_EMPLOYEES_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    })
  }
}

