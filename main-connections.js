import tunnel from 'tunnel-ssh'

var connections = {};

export function connect(connection) {
  connections.push(connection);
  console.log('connections', connections);
  return ["connection", connection];
}
