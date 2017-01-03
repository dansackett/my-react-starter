import React from 'react';
import { connect } from 'react-redux';

import { increment, incrementAsync } from 'Actions/example';

class ReduxPage extends React.Component {
  render() {
    const { count, isAsyncLoading, increment, incrementAsync } = this.props;

    return (
      <div className="page__ReduxPage">
        <h1>Redux is Configured</h1>
        <p>A basic implementation of Redux is implemented so components have access to a global store. This includes asynchronous calls with the help of Redux-Saga.</p>
        <p>The current count is: { count }</p>
        <div className="controls">
          <button className="btn__increment" onClick={() => increment()}>
            Increment Count
          </button>

          <button className="btn__increment" onClick={() => incrementAsync()}>
            {
              isAsyncLoading ?
              'Processing...'
              :
              'Increment Async Count'
            }
          </button>
        </div>
      </div>  
    );
  }
}

export default connect(
  state => ({
    count: state.example.count,
    isAsyncLoading: state.example.isAsyncLoading
  }),
  { increment, incrementAsync }
)(ReduxPage);
