import React, { useContext } from 'react';
import Card from '../components/Card';
import RecipesContext from '../context/RecipesContext';
import Header from '../components/Header';
import MenuInferior from '../components/MenuInferior';
import CategoriesButton from '../components/CategoriesButton';
import '../styles/Foods.css';

function Drinks() {
  const { drinks, drinkCategories } = useContext(RecipesContext);

  return (
    <>
      <Header pageTitle="Drinks" />
      <div>
        {drinkCategories.map(({ strCategory }, index) => (<CategoriesButton
          strCategory={ strCategory }
          key={ index }
        />))}
      </div>
      <div className="card-container">
        {drinks.length && drinks
          .map(({ strDrinkThumb, idDrink, strDrink }, index) => (<Card
            key={ idDrink }
            name={ strDrink }
            img={ strDrinkThumb }
            index={ index }
          />))}
      </div>
      <MenuInferior />
    </>

  );
}

export default Drinks;
