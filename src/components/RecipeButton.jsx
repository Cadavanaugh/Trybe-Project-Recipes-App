import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory, useLocation } from 'react-router-dom';
import style from '../styles/RecipeDetails.module.css';

function RecipeButton({ foodsPath, idReceita }) {
  const [buttonName, setButtonName] = useState('Start Recipe');
  const recipeType = foodsPath ? 'meals' : 'cocktails';
  const { pathname } = useLocation();
  const redirect = pathname.includes('/foods') ? 'foods' : 'drinks';
  const history = useHistory();
  // const idType = foodsPath ? 'id-da-comida' : 'id-da-bebida';

  const getInProgressRecipes = () => {
    if (localStorage.inProgressRecipes !== undefined) {
      const inProgressRec = JSON.parse(localStorage.inProgressRecipes);
      const inProgress = idReceita in inProgressRec[recipeType];
      if (inProgress) setButtonName('Continue Recipe');
    }
  };

  useEffect(() => {
    getInProgressRecipes();
  }, []);

  return (
    <button
      className={ style.fixedButton }
      data-testid="start-recipe-btn"
      type="button"
      onClick={ () => history.push(`/${redirect}/${idReceita}/in-progress`) }
    >
      {buttonName}
    </button>
  );
}

RecipeButton.propTypes = {
  foodsPath: PropTypes.bool,
  idReceita: PropTypes.number,
}.isRequired;

export default RecipeButton;
