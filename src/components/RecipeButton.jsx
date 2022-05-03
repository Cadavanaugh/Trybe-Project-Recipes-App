import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';
import style from '../styles/RecipeDetails.module.css';

function RecipeButton({ foodsPath, idReceita }) {
  const [buttonName, setButtonName] = useState('Start Recipe');
  const recipeType = foodsPath ? 'meals' : 'cocktails';
  const history = useHistory();

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
      onClick={ () => (foodsPath
        ? history.push(`/foods/${idReceita}/in-progress`)
        : history.push(`/drinks/${idReceita}/in-progress`)) }
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
