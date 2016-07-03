import * as mainConnections from './main-connections';

var connections = [
  {id: 1, server: 'devbox4.tbcn.ca', host: '10.4.4.4', localPort: 9988, remotePort: 9988}
];

mainConnections.connect(connections[0]);


