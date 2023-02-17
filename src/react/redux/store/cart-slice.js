import { createSlice } from '@reduxjs/toolkit';
import { fetchCartData, addItemToCart } from './cart-actions';
const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    status: 'idle',
    isLoading: false,
    items: [],
    totalQuantity: 0,
    changed: false,
  },
  reducers: {
    // addItemToCart(state, action) {
    //   const newItem = action.payload;
    //   const existingItem = state.items.find((item) => item.id === newItem.id);
    //   state.totalQuantity++;
    //   state.changed = true;
    //   if (!existingItem) {
    //     state.items.push({
    //       id: newItem.id,
    //       price: newItem.price,
    //       quantity: 1,
    //       totalPrice: newItem.price,
    //       name: newItem.title,
    //     });
    //   } else {
    //     existingItem.quantity++;
    //     existingItem.totalPrice = existingItem.totalPrice + newItem.price;
    //   }
    // },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      state.changed = true;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
  },
  extraReducers: {
    [fetchCartData.pending]: (state) => {
      return {
        ...state,
        isLoading: true,
        status: 'pending',
      };
    },
    [fetchCartData.fulfilled]: (state, action) => {
      const { items, totalQuantity } = action.payload;
      return {
        ...state,
        isLoading: false,
        items,
        totalQuantity,
        status: 'success',
      };
    },
    [fetchCartData.rejected]: (state, action) => {
      return {
        ...state,
        isLoading: false,
        status: 'rejected',
      };
    },
    [addItemToCart.pending]: (state) => {
      return {
        ...state,
        isLoading: true,
        status: 'SEND_CART_DATA_PENDING',
      };
    },
    [addItemToCart.fulfilled]: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      state.changed = true;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    [addItemToCart.rejected]: (state, action) => {
      return {
        ...state,
        isLoading: false,
        status: 'rejected',
      };
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
