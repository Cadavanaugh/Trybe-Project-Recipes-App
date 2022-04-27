import React, { useContext } from 'react';
import Card from '../components/Card';
import RecipesContext from '../Context/RecipesContext';
import './Foods.css';

function Foods() {
  const { foods } = useContext(RecipesContext);
  console.log(foods);
  return (
    <div className="card-container">
      {foods.length && foods.map(({ strMealThumb, idMeal, strMeal }, index) => (<Card
        key={ idMeal }
        name={ strMeal }
        img={ strMealThumb }
        index={ index }
      />))}
    </div>
  );
}

export default Foods;
