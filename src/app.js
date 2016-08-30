import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { ipcRenderer } from 'electron';

import sshTunnelApp from './reducers'
import App from './components/app'
import * as actions from './actions'
import manager from './manager'

let store = createStore(sshTunnelApp);

store.dispatch(actions.addConnection('devbox4.tbcn.ca', '10.4.4.4', 9988, 9988));
store.dispatch(actions.addConnection('devbox4.tbcn.ca', '10.4.4.4', 7788, 7788));
store.dispatch(actions.addConnection('devbox4.tbcn.ca', '10.4.4.4', 8888, 7888));
store.dispatch(actions.addConnection('devbox4.tbcn.ca', '10.4.4.4', 8882, 8882));

ipcRenderer.on('update-connection-status', (event, id, status, message) => {
  console.log('got update-connection-status', 'event', event, 'id', id, 'status', status);
  store.dispatch(actions.updateConnectionStatus(id, status, message));
});

ipcRenderer.on('received-error', (event, id, code, error) => {
  console.log('got received-error', event, 'id', id, 'code', code, 'error', error);
  console.log(error.reason == "CONNECT_FAILED");
  // store.dispatch(actions.updateConnectionStatus(id, status, message));
});

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
