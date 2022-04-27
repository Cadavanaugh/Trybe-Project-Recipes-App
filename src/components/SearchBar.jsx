import React, { useContext } from 'react';
import RecipesContext from '../Context/RecipesContext';

export default function SearchBar() {
  const { radioSearch, valueRadioButton, searchFoods } = useContext(RecipesContext);
  return (
    <>
      <input type="text" data-testid="search-input" />
      <label htmlFor="search-ingredient">
        Ingredient
        <input
          id="search-ingredient"
          type="radio"
          name="radioSearch"
          data-testid="ingredient-search-radio"
          value="ingredient"
          checked={ radioSearch === 'ingredient' }
          onChange={ valueRadioButton }
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
          onChange={ valueRadioButton }
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
          onChange={ valueRadioButton }
        />
      </label>
      <button
        type="button"
        data-testid="exec-search-btn"
        onClick={ searchFoods }
      >
        Busca
      </button>
    </>
  );
}
