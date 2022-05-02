import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import FavoriteButton from '../components/FavoriteButton';
import Ingredients from '../components/Ingredients';
import Video from '../components/Video';
import RecipesContext from '../context/RecipesContext';
import shareIcon from '../images/shareIcon.svg';
import { fetchDrinkRecipe, fetchFoodRecipe } from '../services/fetchFoodsAndDrinks';
import Card from '../components/Card';
import '../styles/RecipeDetails.css';

const trintaDois = 32;
const quarentaTres = 43;
const seis = 6;

function RecipeDetails() {
  const { setError, meals, drinks } = useContext(RecipesContext);
  const { pathname } = useLocation();
  const { idReceita } = useParams();
  const [recipe, setRecipe] = useState([]);
  const key = pathname.includes('/foods') ? 'Meal' : 'Drink';
  const foodsPath = pathname.includes('/foods');
  const recommended = foodsPath ? meals : drinks;
  console.log(recommended);

  useEffect(() => {
    if (foodsPath) {
      fetchFoodRecipe(idReceita, setRecipe, setError);
    } else fetchDrinkRecipe(idReceita, setRecipe, setError);
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
              {
                recommended.slice(0, seis)
                  .map((item, index) => (
                    <Card
                      key={ item[`id${key}`] }
                      name={ item[`str${key}`] }
                      img={ item[`str${key}Thumb`] }
                      index={ index }
                      path={ foodsPath
                        ? `/foods/${item[`id${key}`]}` : `/drinks/${item[`id${key}`]}` }
                      testIDCard="recomendation"
                      testIDTitle="recomendation-title"
                    />
                  ))
              }
            </section>

            <button
              className="fixed-button "
              data-testid="start-recipe-btn"
              type="button"
            >
              Start Recipe

            </button>

          </>)
      }
    </div>
  );
}

export default RecipeDetails;
