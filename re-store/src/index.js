import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import Spinner from './components/spinner';

ReactDOM.render(
  <div>
    <Spinner />
    <App />
  </div>,
  document.getElementById('root')
);
