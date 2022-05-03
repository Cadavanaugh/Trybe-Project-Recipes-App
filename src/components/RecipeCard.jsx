import React from 'react';
import PropTypes from 'prop-types';
// import { useParams } from 'react-router-dom';
// import RecipesContext from '../context/RecipesContext';

function RecipeCard({ img, name }) {
  // const { idReceita } = useParams();

  return (
    <>
      <img
        scr={ img }
        alt={ name }
        width="100px"
      />
      <p>{ name }</p>
    </>
  );
}

RecipeCard.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
}.isRequired;

export default RecipeCard;
