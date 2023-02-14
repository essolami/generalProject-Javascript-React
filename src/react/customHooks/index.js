import React from 'react';
// import useCounter from './use-counter';
import useAsync from './useAsync';
const CustomHooks = (props) => {
  // const counter = useCounter();
  const { data, error, status, loading, run } = useAsync();

  const handleClick = () => {
    const promise = fetch('https://jsonplaceholder.typicode.com/todos/1');
    run(promise);
  };
  return (
    <div>
      {/* {counter} */}
      <div>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {data && (
          <>
            {data.json().then((data) => console.log(data))}
            <p>Data:</p>
          </>
        )}
        <button onClick={handleClick}>Make API Call</button>
      </div>
    </div>
  );
};
export default CustomHooks;
