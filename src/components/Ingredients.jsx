import React from 'react';
import PropTypes from 'prop-types';

export default function Ingredients({ recipe }) {
  const ingredientsList = Object.entries(recipe[0])
    .filter((item) => item[0].includes('strIngredient') && item[1] !== null);
  const ingredientsList2 = ingredientsList.filter((item) => item[1] !== '');
  const measuresList = Object.entries(recipe[0])
    .filter((item) => item[0].includes('strMeasure') && item[1] !== ' ');

  const renderIngredients = ingredientsList2.reduce((acc, cur, idx) => {
    while (ingredientsList2.length >= measuresList.length) {
      measuresList.push(['', '']);
    }
    acc = [...acc, [cur[1], measuresList[idx][1]]];
    return acc;
  }, []);

  return (
    <div className="ingredients-container">
      <h3>Ingredients</h3>
      {renderIngredients.map((ingredient, index) => (
        <ul
          key={ index }
          data-testid={ `${index}-ingredient-name-and-measure` }
        >
          <li>{`${ingredient[0]} - ${ingredient[1]}`}</li>

        </ul>
      ))}
    </div>
  );
}

Ingredients.propTypes = {
  recipe: PropTypes.arrayOf(PropTypes.object).isRequired,
};
