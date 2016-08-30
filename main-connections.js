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
      localPort: connection['localPort'],
      keepAlive: true
    };

    connections[connection.id] = {
      src: connection,
      config: config
    };

    var server = tunnel(config, (error, server) => {
      // console.log('error', error);
      // console.log('server', server);
      connections[connection.id]['server'] = server;
      listener.updateStatus(connection.id, 'connected');
    });

    server.on('error', (error) => {
      console.log('got error', connection.id, error);
      console.log('got error code', error.code, error);
      console.log('got error code', error.code, typeof error);
      // listener.updateStatus(connection.id, 'error');
      listener.gotError(connection.id, error.code, error);
    });

    console.log('after server');
  } else {
  }


  return ["connection", connection];
}

export function disconnect(connection, listener) {
  if((connection.id in connections)) {
    let c = connections[connection.id];
    c.server.close();
    console.log("server is: ", c.server);
    delete connections[connection.id];
    listener.updateStatus(connection.id, 'disconnected');
  }
}

export function currentConections() {
  return connections;
}
