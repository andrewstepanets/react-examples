

const Search = ({ search, onSearch }) => {

  return (
    <>
      <label htmlFor="search">Search:</label>
      <input id="search" type="text" value={search} onChange={onSearch} />
      <p>
        Searching for <strong>{search}</strong>
      </p>
    </>
  )
}

export default Search