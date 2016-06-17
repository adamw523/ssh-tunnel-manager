const connections = (state = [], action) => {
  switch (action.type) {
    case 'ADD_CONNECTION':
      return [
        ...state,
        {
          id: action.id,
          server: action.server,
          host: action.host,
          localPort: action.localPort,
          remotePort: action.remotePort
        }
      ]

    default:
      return state
  }
}

export default connections;
