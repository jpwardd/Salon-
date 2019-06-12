import { 
  REGISTER_SUCCESS, 
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_FAIL,
  LOGIN_USER_SUCCESS,
  LOGIN_EMPLOYEE_SUCCESS,
  EMPLOYEE_LOADED
} from '../actions/types'

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  loading: true,
  user: null,
  employee: null,
  isEmployee: null
}

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch(type) {
    case USER_LOADED:
      return { ...state, isAuthenticated: true, loading: false, user: payload }
    case EMPLOYEE_LOADED:
      return { ...state, isAuthenticated: true, loading: false, isEmployee: true, employee: payload }
    case REGISTER_SUCCESS:
    case LOGIN_USER_SUCCESS:
    case LOGIN_EMPLOYEE_SUCCESS:
      localStorage.setItem('token', payload.token);
      return { ...state, ...payload, isAuthenticated: true, loading: false }
    case REGISTER_FAIL:
    case AUTH_ERROR:
    case LOGIN_FAIL:
      localStorage.removeItem('token');
       return { ...state, token: null, isAuthenticated: false, loading: false }
    default:
     return state;
  }
}