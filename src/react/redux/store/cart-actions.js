import { uiActions } from "./ui-slice";
import { createAsyncThunk } from "@reduxjs/toolkit";
const url = "https://javascript-react-guide-default-rtdb.firebaseio.com";
export const fetchCartData = createAsyncThunk(
  "cart/fetchCartData",
  async (_, thunkAPI) => {
    try {
      const response = await fetch(`${url}/cart.json`);
      const data = await response.json();
      return data;
    } catch (error) {
      thunkAPI.dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Fetching cart data failed!",
        })
      );
    }
  }
);

export const addItemToCart = createAsyncThunk(
  "cart/addItemToCart",
  async (newItem, thunkAPI) => {
    // console.log("items.push(newItem)");
    const { totalQuantity, items } = thunkAPI.getState().cart;
    const newQuantity = totalQuantity + 1;

    try {
      // items.push(newItem);
      // const newItem = action.payload;
      const existingItem = items.findIndex((item) => item.id === newItem.id);

      // state.totalQuantity++;
      // state.changed = true;

      // const data = await response.json();
      // return await response.json();

      const response = await fetch(`${url}/cart.json`, {
        method: "PUT",
        body: JSON.stringify({
          items: [
            ...items,
            {
              id: newItem.id,
              price: newItem.price,
              quantity: items[existingItem]?.quantity || 0 + 1,
              totalPrice: items[existingItem]?.totalPrice || 0 + newItem.price,
              name: newItem.title,
            },
          ],
          totalQuantity: newQuantity,
        }),
      });

      if (!response.ok) {
        throw new Error("Sending cart data failed.");
      }

      if (!existingItem) {
        return {
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        };
      } else {
        console.log(existingItem);
        return {
          ...existingItem,
          quantity: items[existingItem].quantity || 0 + 1,
          totalPrice: items[existingItem].totalPrice || 0 + newItem.price,
        };
        // return {
        //   existingItem.quantity++;
        //   existingItem.totalPrice = existingItem.totalPrice + newItem.price;
        // }
      }
    } catch (error) {}
  }
);
