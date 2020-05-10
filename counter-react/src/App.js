import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonPlus from './components/ButtonPlus';
import ButtonMinus from './components/ButtonMinus';

function App() {

  // let count = 0;
  const [count, setCount] = useState(0);

  const incrementCount = increment => {
    return setCount(count + increment);
  }
  const decrementCount = decrement => {
    return setCount(count - decrement);
  }

 

  return (
    <div className="App">
      <h1>Hello Everyone!</h1>
      <h2>Please push this button</h2>
      <ButtonPlus increment={1} onClickFunction={incrementCount}/>
      <ButtonPlus increment={10} onClickFunction={incrementCount}/>
      <ButtonPlus increment={100} onClickFunction={incrementCount}/>
      <ButtonPlus increment={1000} onClickFunction={incrementCount}/>
      <ButtonMinus decrement={1} onClickFunction={decrementCount}/>
      <ButtonMinus decrement={10} onClickFunction={decrementCount}/>
      <ButtonMinus decrement={100} onClickFunction={decrementCount}/>
      <ButtonMinus decrement={1000} onClickFunction={decrementCount}/>
      <div>
        <span>{count}</span>
      </div>
    </div>
  );
}

export default App;
