import React from 'react';
import useCounter from './use-counter';
import useAsync from './useAsync';
const CustomHooks = (props) => {
  const counter = useCounter();
  const { error, status, data, loading, run } = useAsync(
    'https://api.example.com/data'
  );
  React.useEffect(() => {
    run();
    console.log(data);
  }, [run]);
  return <div>{counter}</div>;
};
export default CustomHooks;
