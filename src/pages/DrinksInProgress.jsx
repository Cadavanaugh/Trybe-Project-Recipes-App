import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import FavoriteButton from '../components/FavoriteButton';
import IngredientsInProgress from '../components/IngredientsInProgress';
import RecipesContext from '../context/RecipesContext';
import shareIcon from '../images/shareIcon.svg';
import { fetchDrinkRecipe } from '../services/fetchFoodsAndDrinks';

function DrinksInProgress() {
  const { setError } = useContext(RecipesContext);
  const { idReceita } = useParams();
  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    fetchDrinkRecipe(idReceita, setRecipe, setError);
  }, [idReceita, setError]);

  return (
    <div>
      {recipe.length && (

        <>
          <img
            src={ recipe[0].strDrinkThumb }
            data-testid="recipe-photo"
            alt="algo"
            width="200px"
          />
          <h2
            data-testid="recipe-title"
          >
            {recipe[0].strDrink}
          </h2>
          <button type="button">
            <img data-testid="share-btn" src={ shareIcon } alt="share Icon" />
          </button>
          <FavoriteButton recipe={ recipe } />
          <p data-testid="recipe-category">{ recipe[0].strAlcoholic }</p>
          <IngredientsInProgress recipe={ recipe } />
          <section data-testid="instructions">
            <h4>Instructions</h4>
            <p>{recipe[0].strInstructions}</p>
          </section>
          <button
            type="button"
            data-testid="finish-recipe-btn"
          >
            Finish Recipe
          </button>
        </>
      )}

    </div>
  );
}

export default DrinksInProgress;
