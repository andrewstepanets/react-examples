
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <header>
        <h1>Monster Rolodex</h1>
        <button
          onClick={() => setCount(count + 1)}>
          +
        </button>
        <button
          onClick={() => setCount(count - 1)}>
          -
        </button>
        <h2>Your clicked {count} times</h2>
      </header>
    </div>
  );
}

export default App;
