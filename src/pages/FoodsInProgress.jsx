import React, { useState, useEffect, useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import FavoriteButton from '../components/FavoriteButton';
import IngredientsInProgress from '../components/IngredientsInProgress';
import RecipesContext from '../context/RecipesContext';
import shareIcon from '../images/shareIcon.svg';
import { fetchFoodRecipe } from '../services/fetchFoodsAndDrinks';

function FoodsInProgress() {
  const history = useHistory();
  const { setError } = useContext(RecipesContext);
  const { idReceita } = useParams();
  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    fetchFoodRecipe(idReceita, setRecipe, setError);
  }, [idReceita, setError]);

  const handleClickDone = () => {
    history.push('/done-recipes');
  };

  return (
    <div>
      {recipe.length > 0 && (
        <>
          <img
            src={ recipe[0].strMealThumb }
            data-testid="recipe-photo"
            alt="algo"
            width="200px"
          />
          <h2
            data-testid="recipe-title"
          >
            {recipe[0].strMeal}
          </h2>
          <button type="button">
            <img data-testid="share-btn" src={ shareIcon } alt="share Icon" />
          </button>
          <FavoriteButton recipe={ recipe } />
          <p data-testid="recipe-category">{ recipe[0].strCategory }</p>
          <IngredientsInProgress recipe={ recipe } />
          <section data-testid="instructions">
            <h4>Instructions</h4>
            <p>{recipe[0].strInstructions}</p>
          </section>
          <button
            type="button"
            data-testid="finish-recipe-btn"
            // disabled={ disabledBtn }
            onClick={ () => handleClickDone }
          >
            Finish Recipe
          </button>
        </>)}

    </div>
  );
}

export default FoodsInProgress;
