import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import RecipesContext from '../context/RecipesContext';

export default function Ingredients({ recipe }) {
  const { pathname } = useContext(RecipesContext);
  const emptyIngredient = pathname.includes('/foods') ? '' : null;
  const emptyIngredient2 = pathname.includes('/foods') ? ' ' : null;

  const ingredientsList = Object.entries(recipe[0])
    .filter((item) => item[0].includes('strIngredient') && item[1] !== emptyIngredient);
  const measuresList = Object.entries(recipe[0])
    .filter((item) => item[0].includes('strMeasure') && item[1] !== emptyIngredient2);
  console.log(measuresList);

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
        <p
          key={ index }
          data-testid={ `${index}-ingredient-name-and-measure` }
        >
          {`-${ingredient[0]} - ${ingredient[1]}`}

        </p>
      ))}
    </div>
  );
}

Ingredients.propTypes = {
  recipe: PropTypes.arrayOf(PropTypes.object).isRequired,
};
