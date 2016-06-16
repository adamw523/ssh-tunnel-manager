import { combineReducers } from 'redux'
import connections from './connections'

const sshTunnelApp = combineReducers({
  connections
})

export default sshTunnelApp;
