import Search from './Search';
import InputWithLabel from './InputWithLabel';

const SearchForm = ({ searchTerm, onSearchInput, onSearchSubmit }) => {
  return (
    <form onSubmit={onSearchSubmit} className="search-form">
      <InputWithLabel
        id='search'
        label='Search'
        value={searchTerm}
        isFocused
        onIputchange={onSearchInput}>
        <strong>Search:&nbsp;</strong>
      </InputWithLabel>
      <button
        type="submit"
        disabled={!searchTerm}
        className="button button__large">
        Submit
      </button>
    </form>
  )
}

export default SearchForm