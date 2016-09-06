import fs from 'fs';
import tunnel from 'tunnel-ssh';
import Client from 'ssh2';

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
      keepAlive: true,
      debug: (msg) => {
        console.log(msg);
      }
    };

    connections[connection.id] = {
      src: connection,
      config: config
    };

    var server = tunnel(config, (error, tnl) => {
      // console.log('error', error);
      // console.log('server', server);
      connections[connection.id]['tnl'] = tnl;
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
    console.log("server is: ", c.tnl);
    c.tnl.emit('close');
    delete connections[connection.id];
    listener.updateStatus(connection.id, 'disconnected');
  }
}

export function currentConections() {
  return connections;
}
