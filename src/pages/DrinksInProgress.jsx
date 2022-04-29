import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
// import RecipeCard from '../components/RecipeCard';
import RecipesContext from '../context/RecipesContext';

function DrinksInProgress() {
  const { drinks } = useContext(RecipesContext);
  const { idReceita } = useParams();
  console.log(drinks);
  const cockTail = (drinks.filter((drink) => drink.idDrink === idReceita));
  console.log(cockTail[0]);
  return (
    <>
      <img
        data-testid="recipe-photo"
        src={ cockTail[0]?.strDrinkThumb }
        alt={ cockTail[0]?.strDrink }
        width="100px"
      />
      <h2 data-testid="recipe-title">{ cockTail[0]?.strDrink }</h2>
      <p>{ cockTail[0]?.strCategory }</p>
      <h3>Ingredients</h3>
      {/* { cockTail.map((ingredient, index) => ingredient.strIngredient[index] !== null) } */}
      { cockTail
        .reduce((acc, curr) => curr
          .strIngredient[acc], 1 !== null && curr.strIngredient[acc]) }
      { cockTail.filter((ingredient, index) => ingredient.strIngredient[index] !== null) }
    </>
  );
}

export default DrinksInProgress;
