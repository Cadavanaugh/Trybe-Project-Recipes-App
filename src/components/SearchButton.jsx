import React, { useContext, useState } from 'react';
import RecipesContext from '../context/RecipesContext';
import searchIcon from '../images/searchIcon.svg';
import SearchBar from './SearchBar';

function SearchButton() {
  const { setIngredientFood } = useContext(RecipesContext);
  const [showSearchBar, setShowSearchBar] = useState(false);
  return (
    <div>
      <img
        type="button"
        data-testid="search-top-btn"
        src={ searchIcon }
        alt="Search Icon"
        aria-hidden="true"
        onClick={ () => {
          setShowSearchBar(!showSearchBar);
          setIngredientFood([]);
        } }
      />
      { showSearchBar && <SearchBar />}
    </div>
  );
}

export default SearchButton;
