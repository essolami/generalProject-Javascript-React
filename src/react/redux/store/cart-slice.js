import { createSlice } from '@reduxjs/toolkit';
import { fetchCartData } from './cart-actions';
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
    replaceCart(state, action) {
      return {
        ...state,
        items: action.payload.items,
        totalQuantity: action.payload.totalQuantity,
      };
    },
    addItemToCart(state, action) {
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
  extraReducers: (builder) => {
    builder
      .addCase(fetchCartData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCartData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.usersById[action.payload.id] = action.payload;
      })
      .addCase(fetchCartData.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
