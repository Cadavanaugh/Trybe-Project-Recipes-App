import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import FavoriteButton from '../components/FavoriteButton';
import Ingredients from '../components/Ingredients';
import Video from '../components/Video';
import RecipesContext from '../context/RecipesContext';
import shareIcon from '../images/shareIcon.svg';
import { fetchDrinkRecipe, fetchFoodRecipe } from '../services/fetchFoodsAndDrinks';

const trintaDois = 32;
const quarentaTres = 43;

function RecipeDetails() {
  const { setError, pathname } = useContext(RecipesContext);
  const { idReceita } = useParams();
  const history = useHistory();
  const [recipe, setRecipe] = useState([]);
  const key = pathname.includes('/foods') ? 'Meal' : 'Drink';
  const redirect = pathname.includes('/foods') ? 'foods' : 'drinks';
  const foodsPath = pathname.includes('/foods');
  console.log(recipe);

  useEffect(() => {
    if (foodsPath) {
      fetchFoodRecipe(idReceita, setRecipe, setError);
    } else fetchDrinkRecipe(idReceita, setRecipe, setError);
  }, [foodsPath, idReceita, setError]);

  // const redirectInProgress = pathname.

  return (
    <div>
      {
        recipe.length && (
          <>
            <img
              src={ recipe[0][`str${key}Thumb`] }
              data-testid="recipe-photo"
              alt="algo"
              width="200px"
            />
            <section>
              <h1 data-testid="recipe-title">{recipe[0][`str${key}`]}</h1>
              <button type="button">
                <img data-testid="share-btn" src={ shareIcon } alt="share Icon" />
              </button>
              <FavoriteButton recipe={ recipe } />
            </section>
            <h3 data-testid="recipe-category">
              {foodsPath ? recipe[0].strCategory : recipe[0].strAlcoholic}
            </h3>
            <Ingredients recipe={ recipe } />
            <section data-testid="instructions">
              <h4>Instructions</h4>
              <p>{recipe[0].strInstructions}</p>
            </section>
            {foodsPath && <Video
              embedId={ recipe[0].strYoutube.substring(trintaDois, quarentaTres) }
            />}
            <div data-testid={ `${0}-recomendation-card` } />
            <button
              data-testid="start-recipe-btn"
              type="button"
              onClick={ () => history.push(`/${redirect}/${idReceita}/in-progress`) }
            >
              Start Recipe
            </button>

          </>)
      }
    </div>
  );
}

export default RecipeDetails;
