import React, { useState } from 'react';
import image from './images/logo-01.svg';
import { AppContainer } from './App.styles';
import { Collapsible } from './components';


const App = () => {

  const [state, setState] = useState(true);
  return (
    <AppContainer>
      <header>
        <img src={image} alt="Logo"/>
        <h1 onClick={() => setState(!state)}>Collapsible</h1>
      </header>
      {
        state && <Collapsible />
      }
    </AppContainer>
  );
}

export default App;
