import electron, { ipcRenderer } from 'electron';
import * as actions from './actions'

import { createStore } from 'redux'
import sshTunnelApp from './reducers'

console.log('electron', electron);

export function startConnection (connection) {
  console.log('manager.js startConnection', connection);
  ipcRenderer.send('start-connection', connection);
}

