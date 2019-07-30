import { ServiceActionTypes, ServiceActions } from '../actions/service';

import { Reducer } from 'redux';
import { Service } from '../store/services/types';

export interface IServiceState {
  loading: boolean
  services: Service[]
  error: {}
}

const initialServiceState: IServiceState = {
  services: [],
  loading: true,
  error: {},
}


export const serviceReducer: Reducer<IServiceState, ServiceActions> = (state = initialServiceState, action) => {
  const { type, payload} = action;

  switch(type) {
   case ServiceActionTypes.GET_SERVICES: {
     return { ...state, loading: false, services: payload}
   }
    default:
      return state
  }
}

