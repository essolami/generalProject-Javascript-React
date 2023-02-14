import React from 'react';
export const List = (props) => {
  console.log('List RUNNING');
  const { items } = props;
  const sortedList = React.useMemo(() => {
    console.log('item sorted');
    return props.items.sort((a, b) => a - b);
  }, [items]);
  return (
    <>
      <h2>{props.title}</h2>
      <ul>
        {sortedList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
};
export default React.memo(List);
