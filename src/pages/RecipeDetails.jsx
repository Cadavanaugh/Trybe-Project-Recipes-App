import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import FavoriteButton from '../components/FavoriteButton';
import Ingredients from '../components/Ingredients';
import Video from '../components/Video';
import RecipesContext from '../context/RecipesContext';
import { fetchDrinkRecipe, fetchFoodRecipe } from '../services/fetchFoodsAndDrinks';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { quarentaTres, trintaDois } from '../services/variables';
import Carroussel from '../components/Carroussel';
import RecipeButton from '../components/RecipeButton';
import ShareButton from '../components/ShareButton';

function RecipeDetails() {
  const { setError, meals, drinks } = useContext(RecipesContext);
  const { pathname } = useLocation();
  const { idReceita } = useParams();
  const [recipe, setRecipe] = useState([]);
  const [isNotRecipeDone, setIsRecipeDone] = useState(true);
  const key = pathname.includes('/foods') ? 'Meal' : 'Drink';
  const foodsPath = pathname.includes('/foods');
  const recommended = foodsPath ? drinks : meals;

  const getDoneRecipes = () => {
    if (localStorage.doneRecipes !== undefined) {
      const doneRec = JSON.parse(localStorage.doneRecipes);
      const isIdRecipe = doneRec.find((item) => item.id === idReceita);
      if (isIdRecipe) setIsRecipeDone(false);
    }
  };

  useEffect(() => {
    if (foodsPath) {
      fetchFoodRecipe(idReceita, setRecipe, setError);
    } else fetchDrinkRecipe(idReceita, setRecipe, setError);
    // if (randomPath) {
    //   fetchRandomFood(idReceita, setRecipe, setError);
    // }
    getDoneRecipes();
  }, []);

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
              <ShareButton />
              <FavoriteButton recipe={ recipe } foodsPath={ foodsPath } keyPath={ key } />
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

            <section>
              <h3>Recommended</h3>
              <Carroussel recommended={ recommended } foodsPath={ foodsPath } />
            </section>

            { isNotRecipeDone && (<RecipeButton
              foodsPath={ foodsPath }
              idReceita={ idReceita }
            />)}
          </>)
      }
    </div>
  );
}

export default RecipeDetails;
