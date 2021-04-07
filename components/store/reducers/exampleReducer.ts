type actionType = {
  type: 'UPDATE_STATE'
  payload: string
}

const initialValue: string = 'Default state value'

export const searchReducer = (state = initialValue, action: actionType) => {
  switch (action.type) {
    case 'UPDATE_STATE': {
      return action.payload
    }
    default:
      return initialValue
  }
}
