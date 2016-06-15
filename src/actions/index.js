let nextConnectionId = 0;

export const addConnection = () => {
  return {
    type: 'ADD_CONNECTION',
    id: nextConnectionId++
  }
}

export const enableConnection = (id) => {
  return {
    type: 'ENABLE_CONNECTION',
    id: id
  }
}
