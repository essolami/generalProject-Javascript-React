import { createStore } from 'redux';

const counterReducer = (
  state = {
    counter: 0,
  },
  action
) => {
  switch (action.type) {
    case 'Increment':
      return {
        counter: state.counter + 1,
      };
    case 'Decrement':
      return {
        counter: state.counter - 1,
      };
  }
  return state;
};
const store = createStore(counterReducer);

export default store;
