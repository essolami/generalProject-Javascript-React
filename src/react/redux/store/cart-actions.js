import { uiActions } from './ui-slice';
import { createAsyncThunk } from '@reduxjs/toolkit';
const url = 'https://javascript-react-guide-default-rtdb.firebaseio.com';
export const fetchCartData = createAsyncThunk(
  'users/fetchCartData',
  async (_, thunkAPI) => {
    try {
      const response = await fetch(`${url}/cart.json`);
      const data = await response.json();
      return data;
    } catch (error) {
      thunkAPI.dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Fetching cart data failed!',
        })
      );
    }
  }
);

export const addItemToCart = createAsyncThunk(
  'users/fetchCartData',
  async (_, thunkAPI) => {
    console.log('heeeey');
    try {
      thunkAPI.dispatch(
        uiActions.showNotification({
          status: 'pending',
          title: 'Sending...',
          message: 'Sending cart data!',
        })
      );

      const response = await fetch(`${url}/cart.json`, {
        method: 'PUT',
        body: JSON.stringify({
          items: cart.items,
          totalQuantity: cart.totalQuantity,
        }),
      });

      if (!response.ok) {
        throw new Error('Sending cart data failed.');
      }

      thunkAPI.dispatch(
        uiActions.showNotification({
          status: 'success',
          title: 'Success!',
          message: 'Sent cart data successfully!',
        })
      );
      // const data = await response.json();
      return await response.json();
    } catch (error) {
      thunkAPI.dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Sending cart data failed!',
        })
      );
    }
  }
);
