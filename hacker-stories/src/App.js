
import { useEffect, useState, useReducer, useCallback } from 'react'
import { useSemiPersistentState } from './hooks'
import List from './List';
import SearchForm from './SearchForm'
import { storiesReducer } from './reducer'
import { API_ENDPOINT } from './constants'
import axios from 'axios'

import './App.scss';


const App = () => {
  // const initialStories = [
  //   {
  //     title: 'React',
  //     url: 'https://reactjs.org/',
  //     author: 'Jordan Walke',
  //     num_comments: 3,
  //     points: 4,
  //     objectID: 0,
  //   },
  //   {
  //     title: 'Redux',
  //     url: 'https://redux.js.org/',
  //     author: 'Dan Abramov, Andrew Clark',
  //     num_comments: 2,
  //     points: 5,
  //     objectID: 1,
  //   },
  // ];
  // const getAsyncStories = () =>
  //   new Promise(resolve =>
  //     setTimeout(
  //       () => resolve({ data: { stories: initialStories } }),
  //       2000)
  //   )

  const [searchTerm, setSearchTerm] = useSemiPersistentState('search', '')
  // const [stories, setStories] = useState(initialStories)

  const [url, setUrl] = useState(`${API_ENDPOINT}${searchTerm}`)

  const [stories, dispatchStories] = useReducer(
    storiesReducer,
    { data: [], isLoading: false, isError: false }
  );
  // const [isLoading, setIsLoading] = useState(false)
  // const [isError, setIsError] = useState(false)

  const handleFetchStories = useCallback(async () => {

    dispatchStories({ type: 'STORIES_FETCH_INIT' });
    // getAsyncStories()
    //   .then(result => {
    //     dispatchStories({
    //       type: 'STORIES_FETCH_SUCCESS',
    //       payload: result.data.stories
    //     })
    // setIsLoading(false)
    try {
      const result = await axios.get(url)

      dispatchStories({
        type: 'STORIES_FETCH_SUCCESS',
        payload: result.data.hits
      })
    }
    catch {
      dispatchStories({ type: 'STORIES_FETCH_FAILURE' })
    }
  }, [url])

  useEffect(() => {
    handleFetchStories()
  }, [handleFetchStories])

  const handleRemoveStory = item => {
    // const newStories = stories.filter(story => item.objectID !== story.objectID)
    // setStories(newStories)
    dispatchStories({
      type: 'REMOVE_STORY',
      payload: item
    })
  }

  const handleSearchInput = (event) => setSearchTerm(event.currentTarget.value)

  const handleSearchSubmit = (event) => {
    setUrl(`${API_ENDPOINT}${searchTerm}`)
    event.preventDefault()
  }


  const searchedStories = stories.data.filter(story =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="container">
      <h1 className="headline-primary">My stories</h1>
      {/* <Search search={searchTerm} onSearch={handleSearch} /> */}
      <SearchForm
        searchTerm={searchTerm}
        onSearchInput={handleSearchInput}
        onSearchSubmit={handleSearchSubmit}
      />
      {  stories.isError && <p>Something went wrong</p>}
      { stories.isLoading ? (
        <p>Loading...</p>
      ) : (
        <List list={searchedStories} onRemoveItem={handleRemoveStory} />
      )}
    </div>
  );
}

export default App;
