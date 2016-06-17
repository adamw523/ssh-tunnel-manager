let nextConnectionId = 100;

export const addConnection = (server, host, localPort, remotePort) => {
  return {
    type: 'ADD_CONNECTION',
    id: nextConnectionId++,
    server: server,
    host: host,
    localPort: localPort,
    remotePort: remotePort
  }
}

export const enableConnection = (id) => {
  return {
    type: 'ENABLE_CONNECTION',
    id: id
  }
}

export const disableConnection = (id) => {
  return {
    type: 'DISABLE_CONNECTION',
    id: id
  }
}
