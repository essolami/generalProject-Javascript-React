import React from 'react';
import './style.css';
import Exercice1 from './exercices/exercice1.js';
import Exercice2 from './exercices/exercice2.js';
import Exercice3 from './exercices/exercice3.js';
import Exercice4 from './exercices/exercice4.js';
import { Exercice5 } from './exercices/exercice5.js';
import ErrorBoundary from './react/errorBoundary/errorBoundary';
// import ExerciceReact1 from './react';
export default function App() {
  const undefinedVariable = () => {
    // if (this.state.counter === 5) {
    // Simulate a JS error
    throw new Error('I crashed!');
    // }
  };
  return (
    <div>
      {/* <Exercice1/> */}
      {/* <Exercice2 /> */}
      {/* <Exercice3 /> */}
      {/* <Exercice4 /> */}
      {/* {Exercice5()} */}
      {/* <ExerciceReact1 /> */}
    </div>
  );
}
