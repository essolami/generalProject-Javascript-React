import React from 'react';
import { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';
import { sendCartData, fetchCartData } from './store/cart-actions';

let isInitial = true;

function ReduxDemo() {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    if (cart.changed) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default ReduxDemo;

/*
***********************************************************************

Redux : is statet management system for cross-componentn ot app-wide state 
app-wide : تطبيق على نطاق واسع

***********************************************************************

We have 3 types of states:
 
** Local State : State that belongs(ينتمي) to a single component and managed by (useState or useReducer)
** Cross-Component State : State that affects multiple component for example the open/close state of a modal 
** App-wide State : affects the entire app for example the user authentification status
--- in conclution : in the ( cross - app wide ) passing around data and updation function fruit props can become cumbersome though (رغم ذلك مرهقة)
So both React context and Redux are there to help us manage such cross or app wide states 

***********************************************************************

so why we need redux if we have contexte

React context has a potential(محتمل) disadvantages :
** Complex Setup : u can't have a complex setup for a large application or u will be in a nested jsx code like this :
<userContext>
  <foodContext>
    <testContext>
      ....
      <App/>
      ....
    </testContext>
  </foodContext>
</userContext>

** performance : for the react memebers team inform that context is better for the low-frequency update like auth ... and not for heavy frequency

***********************************************************************

|---------------------------|
|    Core Redux Concepts    |
|---------------------------|

|-------------Reducer Function
|---> Forwarded to   |-----------> Mutates(=changes) Store Data
Action          Central Data
|--->dispatch        |------------> Subscription
|---------------Components      

***********************************************************************

Reducer : is a standard javaScript function who has two parametres 
--> State : Old state
--> Action : dispatched Action

***********************************************************************

when we need to work with redux in the project should install npm i redux but it's not enough ! 

because redux it's a library who can work with javascript and has no idea about react

so for that we need to install react-redux  
to subscribe the components into store

***********************************************************************

Using an action creator thunk in Redux allows you to write asynchronous actions that interact with the store. An action creator thunk is a function that returns another function, and this returned function takes two arguments: dispatch and getState.

function fetchSomeData() {
  return function(dispatch, getState) {
    dispatch({ type: 'FETCH_DATA_REQUEST' });
    return fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => {
        dispatch({
          type: 'FETCH_DATA_SUCCESS',
          payload: data
        });
      })
      .catch(error => {
        dispatch({
          type: 'FETCH_DATA_FAILURE',
          payload: error.message
        });
      });
  };
}
***********************************************************************


*/
