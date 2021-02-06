
import { useEffect, useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [monsters, setMonsters] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => setMonsters(users))
      .catch(error => console.log(`Something wrong with API ${error}`))
  })

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
      <main>
        {monsters.map(monster => (
          <h2 key={monster.name}>{monster.name}</h2>
        ))}
      </main>
    </div>
  );
}

export default App;
