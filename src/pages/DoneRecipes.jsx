import React from 'react';
import { useHistory } from 'react-router';
import Card from '../components/Card';
import Header from '../components/Header';

function DoneRecipes() {
  const history = useHistory();
  return (
    <>
      <Header pageTitle="Done Recipes" showSearchButton />
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
          onClick={ () => history.push('/foods') }
        >
          Food
        </button>
        <button
          data-testid="filter-by-drink-btn"
          type="button"
          onClick={ () => history.push('/drinks') }
        >
          Drinks
        </button>
      </div>
      <Card />
    </>
  );
}

export default DoneRecipes;
