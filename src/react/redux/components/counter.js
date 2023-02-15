import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const toggleCounterHandler = () => {
    console.log('lol');
    dispatch({ type: 'Increment' });
  };
  return (
    <main>
      <h1>Redux Counter </h1>
      <h2>{counter} </h2>

      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};
export default Counter;
