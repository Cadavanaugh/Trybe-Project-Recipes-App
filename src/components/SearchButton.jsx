import React, { useState } from 'react';
import searchIcon from '../images/searchIcon.svg';

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
    </div>
  );
}

export default SearchButton;
