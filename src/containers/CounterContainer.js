import React, { Component } from 'react';
import Counter from 'components/Counter';
import { connect } from 'react-redux';
import * as CounterActions from 'store/modules/counter'
import { bindActionCreators } from 'redux';

// container components interlocked with redux
class CounterContainer extends Component {
  handleIncrement = () => {
    const { CounterActions } = this.props;
    CounterActions.increment();
  }

  handleDecrement = () => {
    const { CounterActions } = this.props;
    CounterActions.decrement();
  }

  render() {
    const { handleIncrement, handleDecrement } = this;
    const { number } = this.props;

    return (
      <Counter
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        number={number}
      />
    );
  }
}

// use connect() when interlocking component and redux
// connect() returns functions that export props in component

// export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
export default connect(
  (state) => ({
    number: state.counter.number
  }),
  (dispatch) => ({
    CounterActions: bindActionCreators(CounterActions, dispatch)
  })
)(CounterContainer);