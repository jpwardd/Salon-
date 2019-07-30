import { GetServicesAction } from './service';
import { IServiceState } from './../reducers/service';
import { Service } from './../store/services/types';
import { ActionCreator } from 'redux';
import axios from 'axios'
import { setAlert } from './alert'
import { loadUser } from './auth'
import { Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';


export enum ServiceActionTypes {
  CREATE_SERVICE_SUCCESS = 'CREATE_SERVICE_SUCCESS',
  GET_SERVICES = 'GET_SERVICES',
  SERVICE_ERROR = 'SERVICE_ERROR'
}





export interface GetServicesAction {
  type: ServiceActionTypes.GET_SERVICES
  payload: Service[]
}

// export interface CreateServiceAction {
//   type: ServiceActionTypes.CREATE_SERVICE_SUCCESS
//   payload: Service
// }

// export interface ServiceErrorAction {
//   type: ServiceActionTypes.SERVICE_ERROR
//   payload: {}
// }

export type ServiceActions = GetServicesAction 
// Create a new service
// export const createService = (name: string, price: string, category: string) => async (dispatch: Dispatch<ServiceActions>) => {
//   const config = {
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   }

//  const body: string = JSON.stringify({ name, price, category })

//   try {
//     const res = await axios.post('/api/services', body, config)

//     dispatch({
//       type: ServiceActionTypes.CREATE_SERVICE_SUCCESS,
//       payload: res.data
//     })
//   } catch (err) {
//     const errors = err.response.data.errors;

//     if (errors) {
//       errors.forEach((error: string): void => console.log(error))
//     }
//     dispatch({
//       type: ServiceActionTypes.SERVICE_ERROR,
//       payload: { msg: errors.response.statusText, status: err.response.status}
//     })
//   }
// }

// GET services


export const getServices: ActionCreator<ThunkAction<Promise<any>, IServiceState, null, GetServicesAction>
  > = () => {
    return async (dispatch: Dispatch) => {
      try {
        const response = await axios.get("/api/services")
        dispatch({
          type: ServiceActionTypes.GET_SERVICES,
          payload: response.data
        })
      } catch (err) {
        dispatch({
          type: ServiceActionTypes.SERVICE_ERROR,
          payload: { msg: err.response.statusText, status: err.response.status }
        })
      }
    }
  }