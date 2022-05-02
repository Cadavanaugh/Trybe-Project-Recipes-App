import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import FavoriteButton from '../components/FavoriteButton';
import IngredientsInProgress from '../components/IngredientsInProgress';
import RecipesContext from '../context/RecipesContext';
import shareIcon from '../images/shareIcon.svg';

function FoodsInProgress() {
  const { idReceita } = useParams();
  const { meals } = useContext(RecipesContext);
  const filteredFood = (meals.filter((meal) => meal.idMeal === idReceita));
  console.log(idReceita);
  // if (filteredFood[0] === undefined) {
  //   return null;
  // }

  return (
    <div>
      {filteredFood.length && (
        <>
          <img
            src={ filteredFood[0].strMealThumb }
            data-testid="recipe-photo"
            alt="algo"
            width="200px"
          />
          <h2
            data-testid="recipe-title"
          >
            {filteredFood[0].strMeal}
          </h2>
          <button type="button">
            <img data-testid="share-btn" src={ shareIcon } alt="share Icon" />
          </button>
          <FavoriteButton recipe={ filteredFood } />
          <p data-testid="recipe-category">{ filteredFood[0].strCategory }</p>
          <IngredientsInProgress recipe={ filteredFood } />
          <section data-testid="instructions">
            <h4>Instructions</h4>
            <p>{filteredFood[0].strInstructions}</p>
          </section>
          <button
            type="button"
            data-testid="finish-recipe-btn"
          >
            Finish Recipe
          </button>
        </>)}

    </div>
  );
}

export default FoodsInProgress;
