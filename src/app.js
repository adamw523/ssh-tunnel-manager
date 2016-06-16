import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import sshTunnelApp from './reducers'
import App from './components/app.js';

let store = createStore(sshTunnelApp);

render(
  <provider store={store}>
    <App />
  </provider>,
  document.getElementById('app')
)
