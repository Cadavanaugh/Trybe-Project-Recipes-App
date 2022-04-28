import React, { useContext } from 'react';
import Card from '../components/Card';
import Footer from '../components/Footer';
import Header from '../components/Header';
import RecipesContext from '../context/RecipesContext';
import '../styles/Foods.css';

function Foods() {
  const { meals, ingredientFood } = useContext(RecipesContext);
  const foodView = ingredientFood.length ? ingredientFood : meals;
  return (
    <>
      <Header pageTitle="Foods" />
      <div className="card-container">
        {foodView
          .map(({ strMealThumb, idMeal, strMeal }, index) => (<Card
            key={ idMeal }
            name={ strMeal }
            img={ strMealThumb }
            index={ index }
          />))}

      </div>
      <Footer />
    </>

  );
}

export default Foods;
