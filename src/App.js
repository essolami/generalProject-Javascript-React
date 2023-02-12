import React from 'react';
import './style.css';
import Exercice1 from './exercices/exercice1.js';
import Exercice2 from './exercices/exercice2.js';
import Exercice3 from './exercices/exercice3.js';
import Exercice4 from './exercices/exercice4.js';
import { Exercice5 } from './exercices/exercice5.js';
export default function App() {
  function Animal(name) {
    this.name = name;
  }

  Animal.prototype.speak = function () {
    console.log(`${this.name} makes a sound.`);
  };

  function Dog(name) {
    Animal.call(this, name);
  }

  Dog.prototype = Object.create(Animal.prototype);

  Dog.prototype.constructor = Dog;

  console.log(Dog);
  Dog.prototype.bark = function () {
    console.log(`${this.name} barks.`);
  };

  const dog = new Dog('Rufus');
  dog.speak(); // logs "Rufus makes a sound."
  dog.bark(); // logs "Rufus barks."

  return (
    <div>
      {/* <Exercice1/> */}
      {/* <Exercice2 /> */}
      {/* <Exercice3 /> */}
      {/* <Exercice4 /> */}
      {/* {Exercice5()} */}
    </div>
  );
}
