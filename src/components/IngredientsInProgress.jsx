import PropTypes from 'prop-types';
import React, { useContext, useState } from 'react';
import RecipesContext from '../context/RecipesContext';

export default function IngredientsInProgress({ recipe }) {
  const { pathname } = useContext(RecipesContext);
  const [isCheck, setIsCheck] = useState(false);
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

  const handleChange = ({ target }) => {
    setIsCheck({ ...isCheck, [target.name]: target.checked });
  };

  return (
    <div className="ingredients-container">
      <h3>Ingredients</h3>
      {renderIngredients.filter(([ingredient]) => ingredient)
        .map((ingredient, index) => (
          <>
            <label
              key={ index }
              htmlFor={ `ingredient-${index}` }
              data-testid={ `${index}-ingredient-step` }
            >
              <input
                type="checkbox"
                name={ `isCheck${index}` }
                // checked={ isCheck }
                onChange={ handleChange }
                id={ `ingredient-${index}` }
              />
              <p
                style={ isCheck[`isCheck${index}`] ? { textDecoration: 'line-through' }
                  : { textDecoration: '' } }
              >
                {`-${ingredient[0]} - ${ingredient[1]}`}
              </p>
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
