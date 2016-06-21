import React from 'react';
import { connect } from 'react-redux';
import { startConnection } from './../manager';

const mapStateToProps = (state) => {
  return {
    connections: state.connections
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    connectConnection: startConnection
  }
}

const ConnectionsList = ({ connections, connectConnection }) => (
  <ul>
  {connections.map(connection =>
    <li key={connection.id}>
    {connection.localPort}:{connection.host}:{connection.remotePort} @ {connection.server}
    <button onClick={() => connectConnection(connection)}>connect</button>
    </li>
  )
  }
  </ul>
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectionsList);
