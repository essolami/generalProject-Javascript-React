import React from 'react';
import useCounter from './use-counter';
import useAsync from './useAsync';
const CustomHooks = (props) => {
  const counter = useCounter();
  const { data, error, status, loading, run } = useAsync();

  const handleClick = () => {
    const promise = fetch('https://jsonplaceholder.typicode.com/posts/1');
    run(promise);
  };
  return (
    <div>
      {counter}
      <div>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {data && (
          <>
            <p>Data: {data}</p>
          </>
        )}
        <button onClick={handleClick}>Make API Call</button>
      </div>
    </div>
  );
};
export default CustomHooks;
