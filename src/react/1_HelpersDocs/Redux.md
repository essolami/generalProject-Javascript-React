---

[ What is Redux and why is it useful? ]()
Redux is a predictable state management library for JavaScript apps. It provides a way to manage application state in a consistent, predictable manner.

---

[ What is the difference between Redux and React Context API? ]()
Redux is a state management library that can be used with any UI library, whereas React Context API is a way to pass data through the component tree in React only.

---

[ How does the Redux store work? ]()
The Redux store holds the entire state of the application, and provides methods to update, retrieve and subscribe to changes in the state.

---

[ What are the three principles of Redux? ]()
Single source of truth, state is read-only, and changes are made through pure functions.

---

[ What are reducers in Redux? ]()
Reducers are pure functions that specify how the application's state should change in response to actions sent to the store.

---

[ How does Redux handle asynchronous operations? ]()
Redux can handle asynchronous operations using middleware, such as Redux Thunk or Redux Saga.

---

[ What is middleware in Redux and how does it work? ]()
Middleware is code that runs between the dispatch of an action and the moment it reaches the reducer. It can be used to modify, log, or handle actions in various ways.

---

[ What is the purpose of the connect() function in Redux? ]()
The connect() function is a higher-order function that allows components to access the state and dispatch actions from the store.

---

[ What are the different parts of a Redux store? ]()
The Redux store consists of the state tree, actions, reducers, and middleware.

---

[ How does Redux DevTools work and what are some benefits of using it? ]()
Redux DevTools is a browser extension that allows developers to inspect the state and actions in the Redux store, and see how they change over time.

---

[ What is the difference between a container component and a presentational component in React and Redux? ]()
A container component is responsible for connecting to the Redux store and passing data and actions to presentational components, whereas a presentational component is only concerned with displaying data and accepting user input.

---

[ What is an action in Redux? ]()
An action is a plain JavaScript object that describes a change to the state of the application.

---

[ What is a selector in Redux? ]()
A selector is a function that computes derived data from the Redux store, allowing the data to be memoized and efficiently re-used.

---

[ What is immutability and why is it important in Redux? ]()
Immutability means that data cannot be changed after it is created. This is important in Redux to ensure that state changes are tracked and predictable.

---

[ What is the role of dispatch in Redux? ]()
The dispatch() function is used to send an action to the store, triggering a state change and potentially causing a re-render of the UI.

---

[ mutable && Immutable ]()
immutable == ثابت
mutable == متقلب
"mutable" refers to an object or value that can be modified or changed after it has been created. This means that the original object or value is changed directly, without creating a new copy.

"Immutable", on the other hand, refers to an object or value that cannot be modified once it has been created. Instead, any changes to the object or value result in a new copy being created, leaving the original unchanged.

---

[Redux Toolkit]()

- Some of the benefits od redux tooltip is simlify
  -- the configuration of implementation redux store and reducers by add some feature to redux.
  -- we have configureStore() and createReducer which leave the concept of rewriting of action type to function as well as the simplification of the immutable updates with normal mutative.
