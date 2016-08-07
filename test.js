import * as mainConnections from './main-connections';

var connections = [
  {id: 1, server: 'devbox4.tbcn.ca', host: '10.4.4.4', localPort: 9988, remotePort: 9988}
];

mainConnections.connect(connections[0]);

console.log('here');

setTimeout(() => {
  let connections = mainConnections.currentConections();
  console.log('connections:', mainConnections.currentConections());
  console.log('connection:', connections['1']);
  connections['1']['server'].close();
}, 2000);


