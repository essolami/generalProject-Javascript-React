[ ⚡️ What inspired you to become a JavaScript developer? ]()

## "I have always been interested in technology and how it can be used to solve complex problems. I discovered JavaScript while I was in college and I was immediately drawn to its versatility and ability to create dynamic, interactive websites. I was fascinated by the idea that I could bring my designs and ideas to life with code. I started exploring it more and soon realized that JavaScript was not just limited to front-end development, but it can also be used for back-end development, which made it even more appealing to me. I began working on personal projects and collaborating with other developers, and I fell in love with the constant challenge and the opportunity to continuously learn and grow as a developer. That's why I became a JavaScript developer."

![alt text](http://url/to/img.png)

---

[ ⚡️ Difference between Var Let Const? ]()

## var

    - Function Scope
    - Can be redeclared
    - When you call variable before declare it var will return undefined
    - It generates property with the name of the variable inside the window object

## let

    - Block Scope
    - Cannot be redeclared
    - When you call variable before declare it let will return error which is more logical
    - It doesn't generates property with the name of the variable inside the window object and it will return undefined

## const

    - Block Scope
    - Cannot be redeclared
    - When you call variable before declare it let will return error which is more logical
    - It doesn't generates property with the name of the variable inside the window object and it will return undefined

---

[ ⚡️ Difference between Undeclared Undefined null? ]()

## Undeclared :

    - variables are those that do not exist in a program and are not declared
    - Undeclared variable can stops excution of applications, but undefined and null won't stop it

## Undefined :

    - Undefined variables are those that are declared in the program but have not been given any value.

## null :

     - is used to represent no value or no object. It implies no object or null string, no valid boolean value, no number, and no array object.

---

[ ⚡️ Hoisting in JavaScript? ]()

## Hoisting is a behavior in JavaScript where variables and functions are moved to the top of their scope, regardless of where they were declared, before the code is executed. This means that variables and functions can be used before they are declared in the code.

## In JavaScript, variables declared with the "var" keyword are hoisted, but variables declared with the "let" and "const" keywords are not hoisted. Function declarations are also hoisted, while function expressions are not.

---

[ ⚡️ The difference between == and === in JavaScript? ]()

## "==" performs type coercion before comparison, while "===" compares values without any type coercion and only returns true if both values have the same type and value.

---

[ ⚡️ 'This' in JavaScript? ]()

## ‘This’ keyword refers to the object from where it was called. and When used (this) alone, this refers to the global object.

---

[ ⚡️ Coercion in JavaScript? ]()

## coercion : is the process of converting value from one type to another (such as string to number, object to boolean, and so on).

## Any type, be it primitive or an object, is a valid subject for type coercion.

---

[ ⚡️ Closures in JavaScript? ]()

## Closures are often used to protect variables from being accessed or modified by the outside scope. By creating a closure, you can preserve the state of variables and prevent them from being modified by other parts of the code. This allows you to maintain the integrity of your data and helps ensure that your code behaves as intended.

---

[ ⚡️ Loops in JavaScript? ]()

## For : loops through a block of code a number of times

## While : loops through a block of code while a specified condition is true

## Do-while loops : also loops through a block of code while a specified condition is true

---

[ ⚡️ Distraction in JavaScript? ]()

## It is a JavaScript expression that allows array values or object properties to be unpacked into separate variables.

---

[ ⚡️ Spread in JavaScript? ]()

## The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.

## In object we use spread (...) or assign({},object) to create a copy and for array we use alse spread or slice methode

---

[ ⚡️ Currying in JavaScript? ]()

## Currying simply means evaluating functions with multiple arguments and decomposing them into a sequence of functions with a single argument.

## In other terms, currying is when a function — instead of taking all arguments at one time — takes the first one and returns a new function, which takes the second one and returns a new function, which takes the third one, etc. until all arguments are completed. f(a,b,c) => f(a)(b)(c)

---

[ ⚡️ the purpose of the "apply" and "call" methods in JavaScript? ]()

## allow you to invoke a function and set the value of "this" within that function. These methods are part of the Function prototype and are available on all functions in JavaScript.

## ---- call() method allows an object to use function of another object.

## ---- apply () method is similar to the call() method. call() method takes arguments separately whereas, apply() method takes arguments as an array.

## ---- bind() methode create a copy of function

[ ⚡️ async/await in JavaScript? ]()

## " async/await " is a new way to write asynchronous code in JavaScript, which makes it easier to write and maintain asynchronous code. It provides a way to write asynchronous code that looks and behaves like synchronous code, by using async functions and the await keyword.

---

[ ⚡️ ES6 Version ]()

## ES6 is a version of JavaScript that introduced many new features and syntax improvements that make it easier to write and maintain code. Some of the most notable features of ES6 include:

## - let and const // Arrow functions // Template literals : write string templates that makes it easier to embed expressions // Destructuring // Modules // Classes // Promises //

---

[ ⚡️ How do you handle errors and debugging in JavaScript? ]()

## - try...catch statements: This is the most common way to handle errors in JavaScript.

## The try block contains the code that might throw an error, and the catch block contains the code that will be executed if an error occurs.

## - console.log() // Debugging tools( Google Chrome DevTools )

---

[ ⚡️ Can you explain how inheritance works in JavaScript? ]()

## - Inheritance is a concept in object-oriented programming that allows you to create new objects based on existing objects. The existing objects are referred to as the parent or base class, while the new objects are referred to as the child or derived class. The child class inherits properties and methods from the parent class, which means that the child class has access to all the properties and methods defined in the parent class, as well as its own properties and methods.

## The main advantage of inheritance is that it allows you to reuse code and avoid duplicating it. By creating a parent class with common properties and methods, you can create multiple child classes that inherit from the parent, reducing the amount of code that needs to be written and making it easier to maintain your codebase.

## In JavaScript, inheritance is typically implemented using the prototype chain. The prototype chain allows objects to inherit properties and methods from their prototype, which can be another object or the base object in JavaScript (Object.prototype).

---

[ ⚡️ How do you keep your JavaScript skills up to date and continue learning ]()

## Practicing coding every day, or participating in coding challenges // Read Books and Blogs //Participate in online communities and forums // Contribute to open-source projects

---

[ ⚡️ Can you explain the concept of prototypes in JavaScript? ]()

## A prototype in JavaScript is an object that serves as a blueprint for creating other objects. Each object in JavaScript has a prototype, which provides it with its properties and methods.

function Person(name) {
this.name = name;
}

Person.prototype.greet = function() {
console.log(`Hello, I am ${this.name}`);
}

const person1 = new Person("John");
person1.greet(); // Output: "Hello, I am John"

---

[ ⚡️ Have you worked with Promises before ]()

## Yes, I have worked with Promises in JavaScript. Promises are a way to handle asynchronous operations and represent a value that may not be available yet, but will be in the future. They allow us to write asynchronous code in a more readable and maintainable way, and have a then method that can be used to specify what should happen when the promise is resolved or rejected.

---

[ ⚡️ Event loop ]()

## The event loop in JavaScript is the mechanism that runs JavaScript code in a single-threaded environment. It continually checks the message queue for new messages and executes the corresponding callbacks, allowing JavaScript to handle non-blocking operations and keep the UI responsive. This makes it possible for JavaScript to perform multiple tasks simultaneously, even though it runs on a single thread.

---

[ ⚡️ Service Workers ]()

## Service Workers are a powerful feature of modern web development that allow developers to run scripts in the background, separate from a web page, to improve offline functionality and speed up the overall user experience.

## Here's a simple example of how you might use a Service Worker to cache requests and improve the performance of a web page:

// Register the Service Worker
if ('serviceWorker' in navigator) {
navigator.serviceWorker.register('/sw.js')
.then(registration => console.log('Service Worker registered'))
.catch(error => console.log('Service Worker registration failed', error));
}

// sw.js
self.addEventListener('fetch', event => {
event.respondWith(
caches.match(event.request)
.then(response => {
if (response) {
return response;
}
return fetch(event.request);
})
);
});

---

[⚡️ Difference between Set and Map ]()

## In JavaScript, a Map is a collection of key-value pairs, where each key can be of any type and each value can be of any type. A Map is similar to an object, but with some important differences:

## A Map can have any value as a key, whereas object keys must be strings or symbols.

## A Map maintains the order of its elements, whereas the order of properties in an object is not guaranteed.

## You can iterate over the elements of a Map in the order they were added, whereas the only way to iterate over an object's properties is through its keys.

## Here's an example of how you might use a Map:

const ages = new Map();
ages.set("John", 32);
ages.set("Jane", 28);
ages.set("Jim", 40);

console.log(ages.get("Jane")); // logs 28
console.log(ages.has("Jim")); // logs true
console.log(ages.size); // logs 3

ages.forEach((value, key) => { console.log(`${key} is ${value} years old`);});

## A Set is a collection of unique values, where each value can be of any type. A Set is similar to an array, but with some important differences:

## A Set can only contain unique values, whereas an array can contain duplicate values.

## A Set does not have any indexed positions, whereas you can access an element in an array by its index.

## Here's an example of how you might use a Set:

javascript
Copy code
const numbers = new Set([1, 2, 3, 4, 5, 5, 5, 6, 6, 6]);
console.log(numbers.size); // logs 6

numbers.add(7);
console.log(numbers.has(2)); // logs true

numbers.delete(3);
console.log(numbers.has(3)); // logs false

numbers.forEach(value => { console.log(value); });

## Both Map and Set offer some advantages over arrays and objects in certain situations, such as when you need to efficiently store unique values or maintain the order of elements. However, arrays and objects are still widely used in JavaScript and have their own strengths, so it's important to choose the right data structure for the task at hand.

---

[⚡️Concept of Generator functions in JavaScript]()

## Generator functions in JavaScript are special functions that can be paused and resumed multiple times, producing a series of values over time. They are defined using the function\* syntax and can be executed using the next() method.

## The yield keyword is used to return a value and pause the function, while the return statement can be used to end the function and return a final value. Generator functions are commonly used for lazy evaluation, asynchronous programming, and other complex scenarios where multiple values need to be returned over time.

## Here is an example of a generator function in JavaScript:

function\* generator() {
yield 1;
yield 2;
yield 3;
return 4;
}

const g = generator();
console.log(g.next()); // { value: 1, done: false }
console.log(g.next()); // { value: 2, done: false }
console.log(g.next()); // { value: 3, done: false }
console.log(g.next()); // { value: 4, done: true }

---

[⚡️Concept of Reactive and Imperative in JavaScript]()

## Reactive and Imperative programming are two different programming paradigms in JavaScript.

## Imperative programming focuses on how the code is executed

## Reactive programming focuses on what the code should accomplish, rather than how it should be executed.

For example, consider a simple task of displaying the sum of two numbers.

In Imperative :
getSum(arr){
let sum = 0;
for (let i=0 , i.arr.length , i++ ){
sum+=arr[i];
}
}
In Reactive :
getSum(arr){
return arr.reduce((acc,curr)=>acc+curr,0)
}

---

[⚡️Synchronous and asynchronous programming in JavaScript]()

## In synchronous programming, the program execution blocks and waits for a function to return its result before moving on to the next statement. This means that the program runs in a linear and predictable manner, one statement at a time.

## In contrast, asynchronous programming allows a program to continue running while it waits for a function to return its result. Instead of blocking the program execution, it registers a callback function that is triggered when the result is available. This makes it possible for the program to run multiple tasks in parallel without freezing up.

## For example, when making a network request in a synchronous program, the program would freeze until the response is received. On the other hand, in an asynchronous program, the program can continue running while the request is being processed, and the callback function would be triggered when the response is received

---
