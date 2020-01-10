/*eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const Counter = ({ value, onIncrement, onDecrement, onIncrementAsync, onIncrementRandomAsync }) => (
  <div>
    <button onClick={onIncrementAsync}>Increment after 1 second</button>{" "}
    <button onClick={onIncrement}>Increment</button>{" "}
    <button onClick={onDecrement}>Decrement</button>
    <hr />
    <div>Clicked: {value} times</div>
  </div>
);

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onIncrementAsync: PropTypes.func.isRequired
};

// export default Counter;

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    value: state.counter
  };
};

const mapDispatchToProps = {
  onIncrement: () => ({ type: "counter/increment" }),
  onDecrement: () => ({ type: "counter/decrement" }),
  onIncrementAsync: () => ({ type: "counter/incrementAsync" }),
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
