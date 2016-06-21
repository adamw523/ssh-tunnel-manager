import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import sshTunnelApp from './reducers'
import App from './components/app'
import * as actions from './actions'
import manager from './manager'

console.log(manager);

let store = createStore(sshTunnelApp);

store.dispatch(actions.addConnection('devbox4.tbcn.ca', '10.4.4.4', 9988, 9988));
store.dispatch(actions.addConnection('devbox4.tbcn.ca', '10.4.4.4', 7788, 7788));
store.dispatch(actions.addConnection('devbox4.tbcn.ca', '10.4.4.4', 8888, 7888));
store.dispatch(actions.addConnection('devbox4.tbcn.ca', '10.4.4.4', 8882, 8882));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
