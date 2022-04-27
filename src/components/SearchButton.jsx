import React, { useState } from 'react';
import searchIcon from '../images/searchIcon.svg';
import SearchBar from './SearchBar';

function SearchButton() {
  const [showSearchBar, setShowSearchBar] = useState(false);
  return (
    <div>
      <img
        type="button"
        data-testid="search-top-btn"
        src={ searchIcon }
        alt="Search Icon"
        aria-hidden="true"
        onClick={ () => setShowSearchBar(!showSearchBar) }
      />
      { showSearchBar && <SearchBar />}
    </div>
  );
}

export default SearchButton;
