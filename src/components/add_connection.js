import React from 'react';
import { connect } from 'react-redux';

import { addConnection } from '../actions'

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => {
      dispatch(addConnection('test'))
    }
  }
}

const AddConnection = ({ onClick }) => (
  <p>
  Add connection:<input type="text"/>
  <button onClick={onClick}>Add</button>
  </p>
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddConnection);
