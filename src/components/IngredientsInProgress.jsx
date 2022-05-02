import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import RecipesContext from '../context/RecipesContext';

export default function IngredientsInProgress({ recipe }) {
  const { pathname } = useContext(RecipesContext);
  const emptyIngredient = pathname.includes('/foods') ? '' : null;
  const emptyIngredient2 = pathname.includes('/foods') ? ' ' : null;

  const ingredientsList = Object.entries(recipe[0])
    .filter((item) => item[0].includes('strIngredient') && item[1] !== emptyIngredient);
  const measuresList = Object.entries(recipe[0])
    .filter((item) => item[0].includes('strMeasure') && item[1] !== emptyIngredient2);

  const renderIngredients = ingredientsList.reduce((acc, cur, idx) => {
    while (ingredientsList.length >= measuresList.length) {
      measuresList.push(['', '']);
    }
    acc = [...acc, [cur[1], measuresList[idx][1]]];
    return acc;
  }, []);

  return (
    <div className="ingredients-container">
      <h3>Ingredients</h3>
      {renderIngredients.map((ingredient, index) => (
        <>
          <label key={ index } htmlFor={ `ingredient-${index}` }>
            <input
              data-testid={ `${index}-ingredient-step` }
              type="checkbox"
              id={ `ingredient-${index}` }
            />
            {`-${ingredient[0]} - ${ingredient[1]}`}
          </label>
          <br />
        </>
      ))}
    </div>
  );
}

IngredientsInProgress.propTypes = {
  recipe: PropTypes.arrayOf(PropTypes.object).isRequired,
};
