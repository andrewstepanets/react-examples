import React from 'react';
import image from './images/logo-01.svg';
import { AppContainer } from './App.styles';
import { Collapsible } from './components';


const App = () => {
  return (
    <AppContainer>
      <header>
        <img src={image} alt="Logo"/>
        <h1>Collapsible</h1>
      </header>
      <Collapsible />
    </AppContainer>
  );
}

export default App;
