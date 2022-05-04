import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import React, { useContext, useState, useEffect } from 'react';
import RecipesContext from '../context/RecipesContext';

export default function IngredientsInProgress({ recipe }) {
  const { pathname } = useContext(RecipesContext);
  const { idReceita } = useParams();
  const pageType = pathname.includes('/foods') ? 'meals' : 'cocktails';
  const recipesInProgress = JSON.parse(localStorage.getItem('inProgressRecipe'));
  const initialStorage = pageType === 'cocktails'
    ? recipesInProgress?.cocktails[idReceita] : recipesInProgress?.meals[idReceita];
  console.log(initialStorage);
  const [isCheck, setIsCheck] = useState(initialStorage || false);
  const emptyIngredient = pathname.includes('/foods') ? '' : null;

  const ingredientsList = Object.entries(recipe[0])
    .filter((item) => item[0].includes('strIngredient') && item[1] !== emptyIngredient
    && item[1] !== null && item[1] !== '')
    .map((item) => item[1]);

  const measuresList = Object.entries(recipe[0])
    .filter((item) => item[0].includes('strMeasure') && item[1] !== ' '
    && item[1] !== null && item[1] !== '')
    .map((item) => item[1]);

  const renderIngredients = ingredientsList
    .map((ing, idx) => ing + ' -'.concat(measuresList[idx] || ''));

  const handleChange = ({ target }) => {
    setIsCheck({ ...isCheck, [target.name]: target.checked });
    const saveKey = JSON.parse(localStorage.getItem('inProgressRecipe'));
    if (saveKey[pageType][idReceita]) {
      saveKey[pageType][idReceita] = { ...isCheck, [target.name]: target.checked };
    } else {
      saveKey[pageType][idReceita] = { [target.name]: target.checked };
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
      {renderIngredients
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
                {`-${ingredient}`}
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
