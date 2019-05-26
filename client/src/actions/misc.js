import { TOGGLE } from './types'

export const toggle = () => dispatch => {
  dispatch({
    type: TOGGLE,
  })
}