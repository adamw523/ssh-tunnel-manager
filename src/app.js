import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import sshTunnelApp from './reducers'
import App from './components/app.js'
import * as actions from './actions'

let store = createStore(sshTunnelApp);

store.dispatch(actions.addConnection('init one'));
store.dispatch(actions.addConnection('init two'));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
