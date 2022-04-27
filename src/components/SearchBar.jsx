import React, { useContext } from 'react';
import RecipesContext from '../context/RecipesContext';

export default function SearchBar() {
  const { radioSearch,
    valueInputs,
    valueInputsRadios,
    searchFoods,
    inputSearch,
    pathname,
    searchDrinks,
  } = useContext(RecipesContext);
  const search = pathname === '/foods' ? searchFoods : searchDrinks;
  return (
    <>
      <input
        type="text"
        data-testid="search-input"
        name="inputSearch"
        value={ inputSearch }
        onChange={ valueInputs }
      />
      <label htmlFor="search-ingredient">
        Ingredient
        <input
          id="search-ingredient"
          type="radio"
          name="radioSearch"
          data-testid="ingredient-search-radio"
          value="ingredient"
          checked={ radioSearch === 'ingredient' }
          onChange={ valueInputsRadios }
        />
      </label>
      <label htmlFor="search-name">
        Name
        <input
          id="search-name"
          type="radio"
          data-testid="name-search-radio"
          name="radioSearch"
          value="name"
          checked={ radioSearch === 'name' }
          onChange={ valueInputsRadios }
        />
      </label>
      <label htmlFor="search-firstletter">
        First letter
        <input
          id="search-firstletter"
          type="radio"
          data-testid="first-letter-search-radio"
          name="radioSearch"
          value="firstLetter"
          checked={ radioSearch === 'firstLetter' }
          onChange={ valueInputsRadios }
        />
      </label>
      <button
        type="button"
        data-testid="exec-search-btn"
        onClick={ search }
      >
        Busca
      </button>
    </>
  );
}
