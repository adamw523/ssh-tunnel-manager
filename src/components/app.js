import React, { PropTypes } from 'react';
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

const App = ({ connections }) => (
  <div>
    <h1>App Main</h1>
    <ul>
      {connections.map(
        function(connection) {
          <li>
            loop connection
          </li>
        }
      )
      }
      <li>
        connection 1a
      </li>
      <li>
        connection 2b
      </li>
    </ul>
  </div>
);

// connect()(App)

/*
App.propTypes = {
  connections: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired).isRequired
}
*/

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
