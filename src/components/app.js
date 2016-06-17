import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import ConnectionsList from './connections_list'
import AddConnection from './add_connection'

const mapStateToProps = (state) => {
  return {
    connections: state.connections
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

const App = ({ connections }) => (
  <div>
    <h1>App Main</h1>
    <ConnectionsList/>
    <AddConnection/>
  </div>
);

App.propTypes = {
  connections: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    server: PropTypes.string.isRequired,
    host: PropTypes.string.isRequired,
    localPort: PropTypes.number.isRequired,
    remotePort: PropTypes.number.isRequired
  }).isRequired).isRequired
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
