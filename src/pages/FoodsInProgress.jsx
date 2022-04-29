import React, { useContext } from 'react';
import RecipesContext from '../context/RecipesContext';

function FoodsInProgress() {
  const { meals } = useContext(RecipesContext);
  console.log(meals);
  return (
    <div>FoodsInProgress</div>
  );
}

export default FoodsInProgress;
