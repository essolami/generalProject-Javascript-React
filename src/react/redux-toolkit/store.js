import { configureStore } from '@reduxjs/toolkit';
import postSlice from './posts-slice.js';

export const storePosts = configureStore({
  reducer: { post: postSlice },
});
