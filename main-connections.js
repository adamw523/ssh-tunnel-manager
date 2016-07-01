import tunnel from 'tunnel-ssh'

var connections = {};

export function connect(connection) {
  console.log('connecting', connection);

  if(!(connection.id in connections)) {
    let config = {
      user: 'adam',
      host: connection['server'],
      //port: 22,
      agent: process.env.SSH_AUTH_SOCK,
      dstHost: connection['host'],
      dstPort: connection['remotePort']
      //localHost: '127.0.0.1',
      //localPort: connection['localPort']
    };

    connections[connection.id] = {
      src: connection,
      config: config
    };

    console.log('config', config);
    tunnel.tunnel(config, function (error, server) {
      console.log('here-----');
      console.log('error', error);
      console.log('server', server);
    });
  } else {
  }


  return ["connection", connection];
}
