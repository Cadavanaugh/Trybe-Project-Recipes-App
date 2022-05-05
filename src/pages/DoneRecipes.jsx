import React, { useState } from 'react';
import DoneCard from '../components/DoneCard';
import Header from '../components/Header';

export default function DoneRecipes() {
  if (!localStorage.doneRecipes) localStorage.doneRecipes = '[]';
  const localStored = JSON.parse(localStorage.doneRecipes);
  const [done, setDone] = useState(localStored);

  return (
    <>
      <Header pageTitle="Done Recipes" showSearchButton />
      <div>
        <button
          data-testid="filter-by-all-btn"
          type="button"
          onClick={ () => setDone(localStored) }
        >
          All
        </button>
        <button
          data-testid="filter-by-food-btn"
          type="button"
          onClick={ () => setDone(done.filter((x) => x.type === 'food')) }
        >
          Food
        </button>
        <button
          data-testid="filter-by-drink-btn"
          type="button"
          onClick={ () => setDone(done.filter((x) => x.type === 'drink')) }
        >
          Drinks
        </button>
      </div>
      {
        done.map((x, i) => (
          <DoneCard
            key={ i }
            img={ x.image }
            name={ x.name }
            category={ x.category }
            nationality={ x.nationality }
            type={ x.type }
            alcohol={ x.alcoholicOrNot }
            index={ i }
            id={ x.id }
            doneDate={ x.doneDate }
            tags={ x.tags }
          />
        ))
      }
    </>
  );
}
