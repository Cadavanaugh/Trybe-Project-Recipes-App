import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import Carroussel from '../components/Carroussel';
import FavoriteButton from '../components/FavoriteButton';
import Ingredients from '../components/Ingredients';
import RecipeButton from '../components/RecipeButton';
import ShareButton from '../components/ShareButton';
import Video from '../components/Video';
import RecipesContext from '../context/RecipesContext';
import { fetchDrinkRecipe, fetchFoodRecipe } from '../services/fetchFoodsAndDrinks';
import { quarentaTres, trintaDois } from '../services/variables';
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

  console.log(recipe);

  useEffect(() => {
    if (foodsPath) {
      fetchFoodRecipe(idReceita, setRecipe, setError);
    } else fetchDrinkRecipe(idReceita, setRecipe, setError);
    getDoneRecipes();
  }, []);

  return (
    <div className={ style.bodyDetails }>
      {
        recipe.length && (
          <>
            <section className={ style.headerImg }>
              <div className={ style.pic }>
                <div className={ style.gradient } />
                <img
                  src={ recipe[0][`str${key}Thumb`] }
                  data-testid="recipe-photo"
                  alt="algo"
                  width="200px"
                />
                <div>
                  <ShareButton />
                  <FavoriteButton
                    recipe={ recipe }
                    foodsPath={ foodsPath }
                    keyPath={ key }
                  />
                </div>
              </div>
              <div className={ style.titles }>
                <h1 data-testid="recipe-title">
                  {recipe[0][`str${key}`]}
                </h1>
                <h4 data-testid="recipe-category">
                  {foodsPath ? recipe[0].strCategory : recipe[0].strAlcoholic}
                </h4>
              </div>
            </section>
            <section className={ style.ingredientsContainer }>
              <Ingredients recipe={ recipe } />
            </section>
            <section data-testid="instructions" className={ style.instructions }>
              <h3>Instructions</h3>
              <p>{recipe[0].strInstructions}</p>
            </section>
            {foodsPath && <Video
              embedId={ recipe[0].strYoutube.substring(trintaDois, quarentaTres) }
            />}
            <section className={ style.recommendedContainer }>
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
