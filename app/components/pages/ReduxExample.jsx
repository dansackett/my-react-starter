import React from 'react';
import { connect } from 'react-redux';

import { increment, incrementAsync } from 'Actions/example';

class ReduxExamplePage extends React.Component {
  render() {
    const { count, incrementCount, incrementAsyncCount } = this.props;

    return (
      <div className="page__HomePage">
        <h1>Redux is Configured</h1>
        <p>A basic implementation of Redux is implemented so components have access to a global store. This includes asynchronous calls with the help of Redux-Saga.</p>
        <p>The current count is: { count }</p>
        <div className="controls">
          <button className="btn__increment" onClick={incrementCount}>
            Increment Count
          </button>

          <button className="btn__increment" onClick={incrementAsyncCount}>
            Increment Async Count
          </button>
        </div>
      </div>  
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    count: state.example.count
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    incrementCount: () => dispatch(increment),
    incrementAsyncCount: () => dispatch(incrementAsync)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReduxExamplePage);
