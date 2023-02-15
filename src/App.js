import React from 'react';
import './style.css';
import Exercice1 from './javaScript/exercice1.js';
import Exercice2 from './javaScript/exercice2.js';
import Exercice3 from './javaScript/exercice3.js';
import Exercice4 from './javaScript/exercice4.js';
import { Exercice5 } from './javaScript/exercice5.js';
import CustomHooks from './react/customHooks';
import ErrorBoundary from './react/errorBoundary/errorBoundary';
import CounterRedux from './react/redux/components/counter.js';
import CounterReduxClass from './react/redux/components/class-counter.js';
// import ExerciceReact1 from './react';
export default function App() {
  return (
    <div>
      {/* <Exercice1/> */}
      {/* <Exercice2 /> */}
      {/* <Exercice3 /> */}
      {/* <Exercice4 /> */}
      {/* {Exercice5()} */}
      {/* <ExerciceReact1 /> */}
      {/* <CustomHooks /> */}
      {/* <CounterRedux /> */}
      <CounterReduxClass />
    </div>
  );
}
