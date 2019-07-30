import { 
  REGISTER_SUCCESS, 
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_FAIL,
  LOGIN_USER_SUCCESS,
  LOGIN_EMPLOYEE_SUCCESS,
  LOGIN_EMPLOYEE_FAIL,
  EMPLOYEE_LOADED,
  LOGOUT_USER,
  REGISTER_EMPLOYEE_SUCCESS,
  REGISTER_EMPLOYEE_FAIL,
  GET_USERS,
  GET_USERS_FAIL
} from '../actions/types'

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  loading: true,
  user: {},
  users: [],
  employee: null,
  isEmployee: null,
  error: {}
}

export const authReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch(type) {
    case USER_LOADED:
      return { ...state, isAuthenticated: true, loading: false, user: payload }
    case EMPLOYEE_LOADED:
      return { ...state, isAuthenticated: true, loading: false, isEmployee: true, employee: payload }
    case REGISTER_SUCCESS:
    case REGISTER_EMPLOYEE_SUCCESS:
    case LOGIN_USER_SUCCESS:
    case LOGIN_EMPLOYEE_SUCCESS:
      localStorage.setItem('token', payload.token);
      return { ...state, ...payload, isAuthenticated: true, loading: false }
    case REGISTER_FAIL:
    case REGISTER_EMPLOYEE_FAIL:
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case LOGIN_EMPLOYEE_FAIL:
    case LOGOUT_USER:
      localStorage.removeItem('token');
       return { ...state, token: null, isAuthenticated: false, loading: false }
    case GET_USERS: 
      return { ...state, users: payload, loading: false }
    case GET_USERS_FAIL:
      return { ...state, error: payload, loading: false }
    default:
     return state;
  }
}