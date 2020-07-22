// import Log from './log';
// import Calc from './calc';
// import img from './react.png';
// const calc = new Calc();
// const log = new Log();
// log.log(calc.add(1,2,3));
// const el = document.createElement('img');
// el.src = img;
// document.body.appendChild(el);

import React from 'react';
import ReactDOM from 'react-dom';
import css from './main.scss';

console.log(css.toString());

const App = () => <h1>This is Webpack React App</h1>;

ReactDOM.render(<App />, document.getElementById('root'));