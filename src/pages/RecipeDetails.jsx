import React, { useContext, useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import FavoriteButton from '../components/FavoriteButton';
import Ingredients from '../components/Ingredients';
import Video from '../components/Video';
import RecipesContext from '../context/RecipesContext';
import { fetchFoodRecipe, fetchDrinkRecipe } from '../services/fetchFoodsAndDrinks';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { quarentaTres, trintaDois } from '../services/variables';
import Carroussel from '../components/Carroussel';
import RecipeButton from '../components/RecipeButton';
import ShareButton from '../components/ShareButton';
import style from '../styles/Details.module.css';

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
    <div className={ style.bodyDetails }>
      {
        recipe.length && (
          <>
            <div className={ style.headerImg }>
              <img
                className={ style.imgDetails }
                src={ recipe[0][`str${key}Thumb`] }
                data-testid="recipe-photo"
                alt="algo"
                width="200px"
              />
              <section>
                <h1
                  className={ style.tittle }
                  data-testid="recipe-title"
                >
                  {recipe[0][`str${key}`]}
                </h1>
                <ShareButton />
                <FavoriteButton
                  recipe={ recipe }
                  foodsPath={ foodsPath }
                  keyPath={ key }
                />
              </section>
              <h4 data-testid="recipe-category">
                {foodsPath ? recipe[0].strCategory : recipe[0].strAlcoholic}
              </h4>
            </div>
            <div className={ style.containerMenu }>
              <Ingredients recipe={ recipe } />

              <section
                data-testid="instructions"
              >
                <h3 className={ style.recommendedText }>Instructions</h3>
                <p>{recipe[0].strInstructions}</p>
              </section>

              {foodsPath && <Video
                embedId={ recipe[0].strYoutube.substring(trintaDois, quarentaTres) }
              />}

            </div>

            <h3 className={ style.recommendedText }>Recommended</h3>
            <section className={ style.recommendedContainer }>
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
