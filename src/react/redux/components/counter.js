import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const Increment = () => {
    dispatch({ type: 'Increment' });
  };
  const decrement = () => {
    dispatch({ type: 'Decrement' });
  };
  return (
    <main>
      <h1>Redux Counter </h1>
      <h2>{counter} </h2>

      <button onClick={Increment}>Increment Counter</button>
      <button onClick={decrement}>Decrement Counter</button>
    </main>
  );
};
export default Counter;
