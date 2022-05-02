import React from 'react';
import PropTypes from 'prop-types';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';

export default function FavoriteButton({ recipe }) {
  const handleFavorite = () => {
    const favorite = {
      id: recipe[0].idMeal,
      type: 'food',
      nationality: recipe[0].strArea,
      category: recipe[0].strCategory,
      alcoholicOrNot: '',
      name: recipe[0].strMeal,
      image: recipe[0].strMealThumb,
    };

    if (localStorage.favoriteRecipes == null) localStorage.favoriteRecipes = '[]';
    const favs = JSON.parse(localStorage.favoriteRecipes);
    favs.push(favorite);
    localStorage.favoriteRecipes = JSON.stringify(favs);
  };

  return (
    <button type="button" onClick={ handleFavorite }>
      <img
        data-testid="favorite-btn"
        src={ whiteHeartIcon }
        alt="Favorite Icon"
      />
    </button>
  );
}

FavoriteButton.propTypes = {
  recipe: PropTypes.arrayOf(PropTypes.object).isRequired,
};
