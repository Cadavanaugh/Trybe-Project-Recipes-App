import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import FavoriteButton from '../components/FavoriteButton';
import Ingredients from '../components/Ingredients';
import Video from '../components/Video';
import RecipesContext from '../context/RecipesContext';
import shareIcon from '../images/shareIcon.svg';
import { fetchFoodRecipe } from '../services/fetchFoodsAndDrinks';

const trintaDois = 32;
const quarentaTres = 43;

function FoodId() {
  const { setError } = useContext(RecipesContext);
  const { idReceita } = useParams();
  const [recipe, setRecipe] = useState([]);
  console.log(recipe);

  useEffect(() => {
    fetchFoodRecipe(idReceita, setRecipe, setError);
  }, []);

  return (
    <div>
      {
        recipe.length && (
          <>
            <img
              src={ recipe[0].strMealThumb }
              data-testid="recipe-photo"
              alt="algo"
              width="200px"
            />
            <section>
              <h1 data-testid="recipe-title">{recipe[0].strMeal}</h1>
              <button type="button">
                <img data-testid="share-btn" src={ shareIcon } alt="share Icon" />
              </button>
              <FavoriteButton recipe={ recipe } />
            </section>
            <h3 data-testid="recipe-category">{recipe[0].strCategory}</h3>
            <Ingredients recipe={ recipe } />
            <section data-testid="instructions">
              <h4>Instructions</h4>
              <p>{recipe[0].strInstructions}</p>
            </section>
            <Video
              embedId={ recipe[0].strYoutube.substring(trintaDois, quarentaTres) }
            />
            <div data-testid={ `${0}-recomendation-card` } />
            <button data-testid="start-recipe-btn" type="button">Start Recipe</button>

          </>)
      }
    </div>
  );
}

export default FoodId;
