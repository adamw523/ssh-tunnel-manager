import fs from 'fs';
import tunnel from 'tunnel-ssh';

var connections = {};

export function connect(connection, listener) {
  var key = fs.readFileSync('/Users/adam/.ssh/id_rsa').toString();

  if(!(connection.id in connections)) {
    let config = {
      privateKey: key,
      host: connection['server'],
      dstHost: connection['host'],
      dstPort: connection['remotePort'],
      localPort: connection['localPort']
    };

    connections[connection.id] = {
      src: connection,
      config: config
    };

    var server = tunnel(config, (error, server) => {
      console.log('here-----');
      console.log('error', error);
      console.log('server', server);
      connections[connection.id]['server'] = server;
      listener.updateStatus(connection.id, 'connected');
    });

    console.log('after server');
  } else {
  }


  return ["connection", connection];
}

export function currentConections() {
  return connections;
}
