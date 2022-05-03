import copy from 'clipboard-copy';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import unfavoriteIcon from '../images/blackHeartIcon.svg';
import shareIcon from '../images/shareIcon.svg';

export default function FavoriteCard({ id, type, alcohol, index,
  img, name, category, nationality, setFavsFn }) {
  const [copied, setCopied] = useState(false);

  const shareFunc = () => {
    copy(`http://localhost:3000/${type}s/${id}`);
    setCopied(true);
  };
  const removeFavorite = () => {
    const favs = JSON.parse(localStorage.favoriteRecipes);
    favs.splice(index, 1);
    localStorage.favoriteRecipes = JSON.stringify(favs);
    setFavsFn(favs);
  };

  return (
    <div>
      <Link to={ `/${type}s/${id}` }>
        <img
          width="300px"
          src={ img }
          alt={ name }
          data-testid={ `${index}-horizontal-image` }
        />
      </Link>
      <p data-testid={ `${index}-horizontal-top-text` }>
        {type === 'food' ? `${nationality} - ${category}` : alcohol}
      </p>
      <Link to={ `/${type}s/${id}` }>
        <p data-testid={ `${index}-horizontal-name` }>{name}</p>
      </Link>
      {copied && <p>Link copied!</p>}
      <button type="button" onClick={ shareFunc }>
        <img
          src={ shareIcon }
          alt="Share"
          data-testid={ `${index}-horizontal-share-btn` }
        />
      </button>
      <button type="button" onClick={ removeFavorite }>
        <img
          src={ unfavoriteIcon }
          alt="Unfavorite"
          data-testid={ `${index}-horizontal-favorite-btn` }
        />
      </button>
    </div>
  );
}

FavoriteCard.propTypes = {
  index: PropTypes.number,
  name: PropTypes.string,
  img: PropTypes.string,
  category: PropTypes.string,
  nationality: PropTypes.string,
  id: PropTypes.string,
  setFavsFn: PropTypes.func,
}.isRequired;
