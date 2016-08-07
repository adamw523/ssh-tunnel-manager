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

    case 'UPDATE_CONNECTION_STATUS':
      console.log('current state', state);

      for (let connection of state) {
        console.log('connection', connection);
      }

      return state;
    default:
      return state;
  }
}

export default connections;
