import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  posts: [
    {
      id: 1,
      title: 'My First Post',
      body: 'This is my first post on this blog.',
    },
    {
      id: 2,
      title: 'My Second Post',
      body: 'This is my second post on this blog.',
    },
    {
      id: 3,
      title: 'My Third Post',
      body: 'This is my third post on this blog.',
    },
  ],
};

export const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    },
    deletePost: (state, action) => {
      return {
        ...state,
        posts = state.posts.filter((item) => item.id !== action.id)
      }
    },
  },
});
// When you mutate an object or array, you are changing its existing properties or elements rather than creating a new object or array.
/*
  
const person = { name: 'Alice', age: 30 };

person.age = 31;

console.log(person); // { name: 'Alice', age: 31 }

In this example, we're changing the age property of the person object. We're not creating a new object, but rather modifying the existing one. This is an example of mutation.

const numbers = [1, 2, 3];
numbers[1] = 4;
console.log(numbers); // [1, 4, 3]

In this example, we're changing the second element of the numbers array from 2 to 4. Again, we're not creating a new array, but rather modifying the existing one.

Mutation can be useful in some cases, but it can also lead to unexpected behavior and bugs. It's often better to use immutability, which involves creating new objects or arrays rather than modifying existing ones. This can make your code more predictable and easier to reason about. 

*/

// Action creators are generated for each case reducer function
export const postActions = postSlice.actions;

export default postSlice.reducer;
