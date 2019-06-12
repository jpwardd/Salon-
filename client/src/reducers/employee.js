import { 
  CREATE_EMPLOYEE_SUCCESS,
  CREATE_EMPLOYEE_FAIL,
  GET_EMPLOYEES,
} from '../actions/types'

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  employee: null,
  loading: true,
  error: {},
  employee: []
}

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch(type) {
    case CREATE_EMPLOYEE_SUCCESS: 
      localStorage.setItem('token', payload.token);
      return { ...state, ...payload, isAuthenticated: true, loading: false }
    case CREATE_EMPLOYEE_FAIL:
      return { ...state, error: payload, loading: false }
    case GET_EMPLOYEES:
        return { ...state, employees: payload, loading: false }
    default:
     return state;
  }
}