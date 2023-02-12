import React from 'react';
import './style.css';
import Exercice1 from './exercices/exercice1.js';
import Exercice2 from './exercices/exercice2.js';
import Exercice3 from './exercices/exercice3.js';
import Exercice4 from './exercices/exercice4.js';
import { Exercice5 } from './exercices/exercice5.js';
export default function App() {
  return (
    <div>
      {/* <Exercice1/> */}
      {/* <Exercice2 /> */}
      {/* <Exercice3 /> */}
      {/* <Exercice4 /> */}
      {Exercice5()}
    </div>
  );
}
