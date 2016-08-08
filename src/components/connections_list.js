import React from 'react';
import { connect } from 'react-redux';
import { startConnection, stopConnection } from './../manager';

const mapStateToProps = (state) => {
  return {
    connections: state.connections
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    connectConnection: startConnection,
    disconnectConnection: stopConnection
  }
}

const ConnectionsList = ({ connections, connectConnection, disconnectConnection }) => (
  <ul>
  {connections.map(connection =>
    <li key={connection.id}>
    {connection.localPort}:{connection.host}:{connection.remotePort} @ {connection.server}
    -
    {connection.status}
    -
    { connection.status == 'connected' ?
      <button onClick={() => disconnectConnection(connection)}>disconnect</button>
    :
      <button onClick={() => connectConnection(connection)}>connect</button>
    }
    </li>
  )
  }
  </ul>
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectionsList);
