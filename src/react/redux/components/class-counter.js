import React, { Component } from 'react';
import { connect } from 'react-redux';
class ClassCounter extends Component {
  Increment() {
    this.props.increment();
  }
  decrement() {
    this.props.decrement();
  }
  render() {
    return (
      <main>
        <h1>Redux Counter </h1>
        <h2>{this.props.counter} </h2>

        <button onClick={this.Increment.bind(this)}>Increment Counter</button>
        <button onClick={this.decrement.bind(this)}>Decrement Counter</button>
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({ type: 'Increment' }),
    decrement: () => dispatch({ type: 'Decrement' }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ClassCounter);
