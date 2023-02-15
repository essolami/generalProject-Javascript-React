import React, { Component } from 'react';
import { connect } from 'react-redux';
class Counter extends Component {
  Increment() {
    this.props.Increment();
  }
  decrement() {
    this.props.Decrement();
  }
  render() {
    <main>
      <h1>Redux Counter </h1>
      <h2>{this.counter} </h2>

      <button onClick={this.Increment}>Increment Counter</button>
      <button onClick={this.decrement}>Decrement Counter</button>
    </main>;
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    Increment: () => dispatch({ type: 'Increment' }),
    Decrement: () => dispatch({ type: 'Decrement' }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
