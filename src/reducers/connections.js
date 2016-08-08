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
          remotePort: action.remotePort,
          status: 'disconnected'
        }
      ]

    case 'UPDATE_CONNECTION_STATUS':
      return state.map((connection, index) => {
        if (connection.id == action.id) {
          return Object.assign({}, connection, {
            status: action.status,
            message: action.message
          });
        }

        return connection;
      });

    default:
      return state;
  }
}

export default connections;
