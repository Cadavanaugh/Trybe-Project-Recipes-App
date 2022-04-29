import React from 'react';
import Header from '../components/Header';

function FavoriteRecipes() {
  return (
    <>
      <Header pageTitle="Favorite Recipes" />
      <div>
        <button
          data-testid="filter-by-all-btn"
          type="button"
        >
          All
        </button>
        <button
          data-testid="filter-by-food-btn"
          type="button"
        >
          Food
        </button>
        <button
          data-testid="filter-by-drink-btn"
          type="button"
        >
          Drinks
        </button>
      </div>
    </>
  );
}

export default FavoriteRecipes;
