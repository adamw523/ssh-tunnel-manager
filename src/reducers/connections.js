const connections = (state = [], action) => {
  switch (action.type) {
    case 'ADD_CONNECTION':
      return [
        ...state,
        {
          id: action.id,
          name: action.name
        }
      ]

    default:
      return state
  }
}

export default connections;
