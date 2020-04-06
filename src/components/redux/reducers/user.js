const initialState = {
  users: []
}

const users = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_USERS_PENDING':
      return {
        ...state
      }
    case 'GET_USERS_REJECTED':
      return {
        ...state
      }
    case 'GET_USERS_FULFILLED':
      return {
        ...state,
        users: action.payload.data.result
      }
    case 'POST_USERS_PENDING':
      return {
        ...state
      }
    case 'POST_USERS_REJECTED':
      return {
        ...state
      }
    case 'POST_USERS_FULFILLED':
      const newUsers = [...state.users, action.payload.data.result]
      return {
        ...state,
        users: newUsers
      }
    default:
      return state
  }
}

export default users
