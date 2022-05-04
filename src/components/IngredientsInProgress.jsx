import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import React, { useContext, useState, useEffect } from 'react';
import RecipesContext from '../context/RecipesContext';

export default function IngredientsInProgress({ recipe }) {
  const { pathname } = useContext(RecipesContext);
  const { idReceita } = useParams();
  const initialStorage = JSON.parse(localStorage
    .getItem('inProgressRecipe'))?.cocktails[idReceita];
  const [isCheck, setIsCheck] = useState(initialStorage || false);
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
    const saveKey = JSON.parse(localStorage.getItem('inProgressRecipe'));
    if (saveKey.cocktails[idReceita]) {
      saveKey.cocktails[idReceita] = { ...isCheck, [target.name]: target.checked };
    } else {
      saveKey.cocktails[idReceita] = { [target.name]: target.checked };
    }
    localStorage.setItem('inProgressRecipe', JSON.stringify(saveKey));
  };

  const saveProgress = () => {
    localStorage.setItem('inProgressRecipe', JSON.stringify(
      {
        cocktails: {},
        meals: {},
      },
    ));
  };

  useEffect(() => {
    if (!localStorage.getItem('inProgressRecipe')) {
      saveProgress();
    }
  }, []);

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
                checked={ isCheck[`isCheck${index}`] }
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
