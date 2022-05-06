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
  const [recipe, setRecipe] = useState([{}]);
  const [copied, setCopied] = useState(false);
  const redirect = pathname.includes('/foods') ? 'foods' : 'drinks';
  const key = pathname.includes('/foods') ? 'Meal' : 'Drink';
  const foodsPath = pathname.includes('/foods');
  const [isDisabled, setIsDisabled] = useState(true);

  console.log(recipe);

  useEffect(() => {
    fetchFoodRecipe(idReceita, setRecipe, setError);
  }, [idReceita, setError]);

  const saveDoneRecipe = () => {
    const createDoneRecipe = {
      id: idReceita,
      type: 'food',
      nationality: recipe[0].strArea,
      category: recipe[0].strCategory,
      alcoholicOrNot: '',
      name: recipe[0].strMeal,
      image: recipe[0].strMealThumb,
      doneDate: new Date().toLocaleDateString(),
      tags: recipe[0].strTags === '' ? [] : recipe[0].strTags.split(',', 2),
    };
    if (!localStorage.doneRecipes) localStorage.doneRecipes = '[]';
    const done = JSON.parse(localStorage.doneRecipes);
    const isDone = done.find((fav) => fav.id === idReceita);
    if (!isDone) {
      done.push(createDoneRecipe);
      localStorage.doneRecipes = JSON.stringify(done);
    }
  };

  const handleClickDone = () => {
    saveDoneRecipe();
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
          <IngredientsInProgress recipe={ recipe } isDisabled={ setIsDisabled } />
          <section data-testid="instructions">
            <h4>Instructions</h4>
            <p>{recipe[0].strInstructions}</p>
          </section>
          <button
            type="button"
            data-testid="finish-recipe-btn"
            disabled={ isDisabled }
            onClick={ handleClickDone }
          >
            Finish Recipe
          </button>
        </>)}

    </div>
  );
}

export default FoodsInProgress;
