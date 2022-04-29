import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import RecipeCard from '../components/RecipeCard';
import RecipesContext from '../context/RecipesContext';

function DrinksInProgress() {
  const { drinks } = useContext(RecipesContext);
  const { idReceita } = useParams();
  console.log(drinks);
  return (
    <>
      {drinks.filter((drink) => (drink.idDrink === idReceita
        ? <RecipeCard img={ drink?.strDrinkThumb } /> : null))}

    </>
  );
}

export default DrinksInProgress;
