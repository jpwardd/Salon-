import axios from 'axios';
import { 
  REGISTER_SUCCESS, 
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_USER_SUCCESS,
  LOGIN_EMPLOYEE_SUCCESS,
  LOGIN_FAIL,
  EMPLOYEE_LOADED,
  SET_CURRENT_USER,
  LOGOUT_USER,
  REGISTER_EMPLOYEE_FAIL,
  LOGIN_EMPLOYEE_FAIL,
  REGISTER_EMPLOYEE_SUCCESS
} from './types'
import { setAlert } from './alert'
import setAuthToken from '../utils/setAuthToken'

// Load User
export const loadUser = () => async dispatch => {
  if(localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get('/api/auth');

    dispatch({
      type: USER_LOADED,
      payload: res.data
    })
  } catch (err) {
    dispatch({
      type: AUTH_ERROR
    })
  }
}

// Load Employee
export const loadEmployee = () => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get('/api/auth/employees');

    dispatch({
      type: EMPLOYEE_LOADED,
      payload: res.data
    })
  } catch (err) {
    dispatch({
      type: AUTH_ERROR
    })
  }
}

// Register User
export const register = ({ name, email, color, employee, manager, owner, password }) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
  
  const body = JSON.stringify({ name, email, color, employee, manager, owner, password });
  
  try {
    const res = await axios.post('/api/users', body, config);
    
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });

    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;
    
    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
    }
    dispatch({
      type: REGISTER_FAIL
    })
  }
}

export const registerEmployee = ({ name, email, color, password }) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
  
  const body = JSON.stringify({ name, email, color, password });
  
  try {
    const res = await axios.post('/api/employees', body, config);
    
    dispatch({
      type: REGISTER_EMPLOYEE_SUCCESS,
      payload: res.data
    });

    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;
    
    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
    }
    dispatch({
      type: REGISTER_EMPLOYEE_FAIL
    })
  }
}



// Login User
export const loginUser = (email, password) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
  
  const body = JSON.stringify({ email, password });
  
  try {
    const res = await axios.post('/api/auth', body, config);
    
    dispatch({
      type: LOGIN_USER_SUCCESS,
      payload: res.data
    });

    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;
    
    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
    }
    dispatch({
      type: LOGIN_FAIL
    })
  }
}


export const loginEmployee = (email, password) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
  
  const body = JSON.stringify({ email, password });
  
  try {
    const res = await axios.post('/api/auth/employees', body, config);
    
    dispatch({
      type: LOGIN_EMPLOYEE_SUCCESS,
      payload: res.data
    });

    dispatch(loadEmployee());
  } catch (err) {
    const errors = err.response.data.errors;
    
    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
    }
    dispatch({
      type: LOGIN_EMPLOYEE_FAIL
    })
  }
}

export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

export const logoutUser = () => dispatch => {
  // Remove token from localStorage
  dispatch({
    type: LOGOUT_USER
  })


};