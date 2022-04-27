import React, { useContext } from 'react';
import Card from '../components/Card';
import RecipesContext from '../context/RecipesContext';
import '../styles/Foods.css';
import Header from '../components/Header';
import MenuInferior from '../components/MenuInferior';
import CategoriesButton from '../components/CategoriesButton';

function Foods() {
  const { meals, foodCategories } = useContext(RecipesContext);
  console.log(meals);
  return (
    <>
      <Header pageTitle="Foods" />
      <div>
        {foodCategories.map(({ strCategory }, index) => (<CategoriesButton
          strCategory={ strCategory }
          key={ index }
        />))}
      </div>
      <div className="card-container">
        {meals.length && meals.map(({ strMealThumb, idMeal, strMeal }, index) => (<Card
          key={ idMeal }
          name={ strMeal }
          img={ strMealThumb }
          index={ index }
        />))}
      </div>
      <MenuInferior />
    </>

  );
}

export default Foods;
