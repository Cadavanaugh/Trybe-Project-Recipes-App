import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import FavoriteButton from '../components/FavoriteButton';
import Ingredients from '../components/Ingredients';
import RecipesContext from '../context/RecipesContext';
import shareIcon from '../images/shareIcon.svg';

function FoodsInProgress() {
  const { idReceita } = useParams();
  const { meals } = useContext(RecipesContext);
  const filteredFood = (meals.filter((meal) => meal.idMeal === idReceita));
  console.log(filteredFood);

  return (
    <div>
      <img
        src={ filteredFood[0]?.strMealThumb }
        data-testid="recipe-photo"
        alt="algo"
        width="200px"
      />
      <h2
        data-testid="recipe-title"
      >
        {filteredFood[0]?.strMeal}
      </h2>
      <button type="button">
        <img data-testid="share-btn" src={ shareIcon } alt="share Icon" />
      </button>
      <FavoriteButton recipe={ filteredFood } />
      <p data-testid="recipe-category">{ filteredFood[0]?.strCategory }</p>
      <Ingredients recipe={ filteredFood } />

    </div>
  );
}

export default FoodsInProgress;
