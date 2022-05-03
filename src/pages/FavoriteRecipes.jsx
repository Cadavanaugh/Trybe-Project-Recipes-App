import React, { useState } from 'react';
import FavoriteCard from '../components/FavoriteCard';
import Header from '../components/Header';

function FavoriteRecipes() {
  const localStored = JSON.parse(localStorage.favoriteRecipes);
  const [favs, setFavs] = useState(localStored);

  return (
    <>
      <Header pageTitle="Favorite Recipes" showSearchButton />
      <div>
        <button
          data-testid="filter-by-all-btn"
          type="button"
          onClick={ () => setFavs(localStored) }
        >
          All
        </button>
        <button
          data-testid="filter-by-food-btn"
          type="button"
          onClick={ () => setFavs(favs.filter((x) => x.type === 'food')) }
        >
          Food
        </button>
        <button
          data-testid="filter-by-drink-btn"
          type="button"
          onClick={ () => setFavs(favs.filter((x) => x.type === 'drink')) }
        >
          Drinks
        </button>
      </div>
      {
        favs.map((x, i) => (
          <FavoriteCard
            key={ i }
            img={ x.image }
            name={ x.name }
            category={ x.category }
            nationality={ x.nationality }
            type={ x.type }
            alcohol={ x.alcoholicOrNot }
            index={ i }
            id={ x.id }
            setFavsFn={ setFavs }
          />
        ))
      }
    </>
  );
}

export default FavoriteRecipes;
