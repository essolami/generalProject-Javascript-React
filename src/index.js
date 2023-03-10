import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import store from './react/redux/store';
// import storePosts from './react/redux/redux-toolkit/store.js';
import './index.css';
import { BrowserRouter, Route, Outlet, Link } from 'react-router-dom';

const root = createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

// we create a provider from react-redux in the top for passing all store data to entire application
