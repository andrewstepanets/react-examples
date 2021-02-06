
import { useEffect, useState } from 'react';
import CardList from 'components/card-list/card-list';

function App() {
  const [count, setCount] = useState(0);
  const [monsters, setMonsters] = useState([])

  useEffect(() => {
    async function fetchData() {
      await fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(users => setMonsters(users))
        .catch(error => console.log(`Something wrong with API ${error}`))
    }
    fetchData();
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
      <CardList>
        {monsters.map(monster => (
          <h2 key={monster.id}>{monster.name}</h2>
        ))}
      </CardList>
    </div>
  );
}

export default App;
