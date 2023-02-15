import React from 'react';
// import useCounter from './use-counter';
import useAsync from './useAsync';
const CustomHooks = (props) => {
  const { data, error, status, loading, run } = useAsync();

  const handleClick = () => {
    const promise = fetch('https://jsonplaceholder.typicode.com/todos');
    run(promise);
  };
  React.useEffect(() => {}, [data]);
  return (
    <div>
      This is some Custom Hooks
      {/* <div>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        <p>Data:</p>

        <button onClick={handleClick}>Make API Call</button>
      </div> */}
    </div>
  );
};
export default CustomHooks;
