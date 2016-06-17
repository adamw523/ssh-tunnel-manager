import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    connections: state.connections
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

const ConnectionsList = ({ connections }) => (
  <ul>
  {connections.map(connection =>
    <li key={connection.id}>
    {connection.localPort}:{connection.host}:{connection.remotePort} @ {connection.server}
    </li>
  )
  }
  </ul>
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectionsList);
