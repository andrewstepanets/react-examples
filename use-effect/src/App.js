
import { useState, useEffect } from 'react'
import AppContainer from './App.styles';
import Card from './components/card/card.component';


function App() {

  const [user, setUser] = useState(null)
  const [searchQuery, setSearchQuery] = useState('Bret')

  useEffect(() => {
    const fetchFunc = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users?username=${searchQuery}`)
      const resJson = await response.json()
      setUser(resJson[0])
    }
    fetchFunc()
  }, [searchQuery])

  return (
    <AppContainer>
      <Card>
        <input
          type="search"
          value={searchQuery}
          onChange={event => setSearchQuery(event.target.value)} />
        {
          user ? (
            <div>
              <h3>{user.name}</h3>
              <h3>{user.username}</h3>
              <h3>{user.email}</h3>
            </div>
          ) : (
            <p>No user found</p>
          )
        }
      </Card>
    </AppContainer>
  );
}

export default App;
