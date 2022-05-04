import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

export default function FavoriteButton({ recipe, foodsPath, keyPath }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const id = recipe[0][`id${keyPath}`];
  const favorite = {
    id,
    type: foodsPath ? 'food' : 'drink',
    nationality: foodsPath ? recipe[0].strArea : '',
    category: recipe[0].strCategory,
    alcoholicOrNot: foodsPath ? '' : recipe[0].strAlcoholic,
    name: recipe[0][`str${keyPath}`],
    image: recipe[0][`str${keyPath}Thumb`],
  };

  const updateIcon = () => {
    if (localStorage.favoriteRecipes !== undefined) {
      const favs = JSON.parse(localStorage.favoriteRecipes);
      const isInFavorites = favs.find((fav) => fav.id === id);
      if (isInFavorites) {
        setIsFavorite(true);
      } else { setIsFavorite(false); }
    }
  };

  const saveFavorite = () => {
    if (!localStorage.favoriteRecipes) localStorage.favoriteRecipes = '[]';
    const favs = JSON.parse(localStorage.favoriteRecipes);
    const isInFavorite = favs.find((fav) => fav.id === id);
    if (isInFavorite) {
      const remove = favs.filter((item) => item.id !== isInFavorite.id);
      localStorage.favoriteRecipes = JSON.stringify(remove);
    } else {
      favs.push(favorite);
      localStorage.favoriteRecipes = JSON.stringify(favs);
    }
    updateIcon();
  };

  useEffect(() => {
    updateIcon();
  }, []);

  return (
    <button
      type="button"
      onClick={ saveFavorite }
    >
      <img
        data-testid="favorite-btn"
        src={ isFavorite ? blackHeartIcon : whiteHeartIcon }
        alt="Favorite Icon"
      />
    </button>
  );
}

FavoriteButton.propTypes = {
  recipe: PropTypes.arrayOf(PropTypes.object),
  foodsPath: PropTypes.bool,
  keyPath: PropTypes.string,
}.isRequired;
