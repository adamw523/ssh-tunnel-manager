const connections = (state = [], action) => {
  switch (action.type) {
    case 'ADD_CONNECTION':
      return [
        ...state,
        null
      ]

    default:
      return state
  }
}

export default connections;
