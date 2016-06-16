let nextConnectionId = 100;

export const addConnection = (name) => {
  return {
    type: 'ADD_CONNECTION',
    id: nextConnectionId++,
    name: name
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
