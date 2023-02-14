import React from 'react';
import MyParagraph from './paragraph';
const DemoOutput = (props) => {
  console.log('demoOutput RUNNING');
  return <MyParagraph>{props.show ? 'this is new!' : ''}</MyParagraph>;
};
export default React.memo(DemoOutput);
