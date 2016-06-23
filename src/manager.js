import electron, { ipcRenderer } from 'electron';
console.log('electron', electron);

export function startConnection (connection) {
  console.log('manager.js startConnection', connection);
  ipcRenderer.send('start-connection', connection);
}

