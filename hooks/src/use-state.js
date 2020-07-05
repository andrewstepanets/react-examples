import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return(
    <div>
      <HookSwitcher />
    </div>
  );
};

const HookSwitcher = () => {

  const [color, setColor] = useState('white');
  const [fontSize, setFontSize] = useState(14);
  return(
    <div style={{ padding: '10px', 
                  background: color,
                  fontSize: `${fontSize}px`}}>
      <p>Using React Hooks</p>
      <button 
        onClick={() => setColor('darkblue')}>
          Dark
      </button>
      <button 
        onClick={() => setColor('white')}>
        Light
      </button>
      <button 
        onClick={() => setFontSize((s) => s + 2)}>
        + 
      </button>
      <button 
        onClick={() => setFontSize((s) => s - 2)}>
        -
      </button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
