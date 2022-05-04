import React, { useState, useEffect, useContext } from 'react';
import { useParams, useHistory, useLocation } from 'react-router-dom';
import copy from 'clipboard-copy';
import FavoriteButton from '../components/FavoriteButton';
import IngredientsInProgress from '../components/IngredientsInProgress';
import RecipesContext from '../context/RecipesContext';
import { fetchFoodRecipe } from '../services/fetchFoodsAndDrinks';
import shareIcon from '../images/shareIcon.svg';

function FoodsInProgress() {
  const history = useHistory();
  const { pathname } = useLocation();
  const { setError } = useContext(RecipesContext);
  const { idReceita } = useParams();
  const [recipe, setRecipe] = useState([]);
  const [copied, setCopied] = useState(false);
  const redirect = pathname.includes('/foods') ? 'foods' : 'drinks';
  const key = pathname.includes('/foods') ? 'Meal' : 'Drink';
  const foodsPath = pathname.includes('/foods');

  useEffect(() => {
    fetchFoodRecipe(idReceita, setRecipe, setError);
  }, [idReceita, setError]);

  const handleClickDone = () => {
    history.push('/done-recipes');
  };

  const shareFunc = () => {
    copy(`http://localhost:3000/${redirect}/${idReceita}`);
    setCopied(true);
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
          {copied && <p>Link copied!</p>}
          <button type="button" onClick={ shareFunc }>
            <img
              src={ shareIcon }
              alt="Share"
              data-testid="share-btn"
            />
          </button>
          <FavoriteButton recipe={ recipe } foodsPath={ foodsPath } keyPath={ key } />
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
            onClick={ handleClickDone }
          >
            Finish Recipe
          </button>
        </>)}

    </div>
  );
}

export default FoodsInProgress;
