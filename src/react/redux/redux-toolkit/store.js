import { configureStore } from '@reduxjs/toolkit';
import postSlice from './posts-slice.js';

const storePosts = configureStore({
  reducer: { post: postSlice },
});

export default storePosts;
