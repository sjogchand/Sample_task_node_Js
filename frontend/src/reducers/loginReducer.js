import { SET_LOGIN_DATA } from './../actions/constants'

const initalState = {
  loginData: [],
}

function loginReducer(state = initalState, action) {
  switch (action.type) {
    case SET_LOGIN_DATA:
      return { ...state, loginData: action.payload }

    default:
      return state
  }
}

export default loginReducer
