import React, { useContext, useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import FavoriteButton from '../components/FavoriteButton';
import Ingredients from '../components/Ingredients';
import Video from '../components/Video';
import RecipesContext from '../context/RecipesContext';
import shareIcon from '../images/shareIcon.svg';
// import style from '../styles/RecipeDetails.module.css';
import { fetchFoodRecipe, fetchDrinkRecipe } from '../services/fetchFoodsAndDrinks';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { quarentaTres, trintaDois } from '../services/variables';
import Carroussel from '../components/Carroussel';
import RecipeButton from '../components/RecipeButton';

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
