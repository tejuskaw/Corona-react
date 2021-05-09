import { combineReducers } from 'redux'

const hi = (state = [], action) => {
  switch (action.type) {
    case 'FETCH':
      return action.payload
    default:
      return state
  }
}

export default combineReducers({
  data: hi,
})
