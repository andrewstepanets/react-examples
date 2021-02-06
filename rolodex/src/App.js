
import { useEffect, useState } from 'react';
import CardList from 'components/card-list/card-list';

function App() {
  const [monsters, setMonsters] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    async function fetchData() {
      await fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(users => setMonsters(users))
        .catch(error => console.log(`Something wrong with API ${error}`))
    }
    fetchData();
  });

  // const filteredMonsters = monsters.filter(monster =>
  //   monster.name.toLowerCase().includes(search).toLowerCase()
  // )
  const filteredMonsters = monsters.filter(monster => (
    monster.name
      .toLowerCase()
      .includes(search.toLowerCase())
  ))

  return (
    <div>
      <h1>Monster Rolodex</h1>
      <input
        type='search'
        placeholder='Search Monsters'
        onChange={(e) => setSearch(e.target.value)} />

      <CardList monsters={filteredMonsters} />
    </div>
  );
}

export default App;
