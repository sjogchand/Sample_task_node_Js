import { SET_LOGIN_DATA } from './constants'

export const setLoginData = (data) => ({
  type: SET_LOGIN_DATA,
  payload: data,
})
