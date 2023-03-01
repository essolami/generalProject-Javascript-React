import React from 'react';
import ReduxDemo from './react/redux';
import Basic from './react/react-router/Basic.js';
import CustomFilters from './react/react-router/CustomFilters.js';
// import ReduxToolkit from './react/redux-toolkit';
import { BrowserRouter, Route, Outlet, Link } from 'react-router-dom';
function App() {
  // return <ReduxDemo />;
  // return <ReduxToolkit />;
  return <Basic />;
  return <CustomFilters />;
}

export default App;
