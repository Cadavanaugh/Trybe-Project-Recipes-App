import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import FavoriteButton from '../components/FavoriteButton';
import IngredientsInProgress from '../components/IngredientsInProgress';
import RecipesContext from '../context/RecipesContext';
import shareIcon from '../images/shareIcon.svg';

function DrinksInProgress() {
  const { idReceita } = useParams();
  const { drinks } = useContext(RecipesContext);
  const filteredDrink = (drinks.filter((drink) => drink.idDrink === idReceita));
  // if (filteredDrink[0] === undefined) {
  //   return null;
  // }

  return (
    <div>
      {filteredDrink.length && (

        <>
          <img
            src={ filteredDrink[0].strDrinkThumb }
            data-testid="recipe-photo"
            alt="algo"
            width="200px"
          />
          <h2
            data-testid="recipe-title"
          >
            {filteredDrink[0].strDrink}
          </h2>
          <button type="button">
            <img data-testid="share-btn" src={ shareIcon } alt="share Icon" />
          </button>
          <FavoriteButton recipe={ filteredDrink } />
          <p data-testid="recipe-category">{ filteredDrink[0].strAlcoholic }</p>
          <IngredientsInProgress recipe={ filteredDrink } />
          <section data-testid="instructions">
            <h4>Instructions</h4>
            <p>{filteredDrink[0].strInstructions}</p>
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
