import React, { useContext } from 'react';
import Card from '../components/Card';
import RecipesContext from '../context/RecipesContext';
import Header from '../components/Header';
import MenuInferior from '../components/MenuInferior';
import '../styles/Foods.css';
import { fetchDrinksByCategory } from '../services/fetchFoodsAndDrinks';

function Drinks() {
  const { drinks, drinkCategories } = useContext(RecipesContext);

  const handleCategoryFilter = async (category) => {
    const filteredDrinks = await fetchDrinksByCategory(category);
    console.log(filteredDrinks);
  };

  return (
    <>
      <Header pageTitle="Drinks" />
      <div>
        <button
          type="button"
          onClick={ () => setIsFilter(false) }
          data-testid="All-category-filter"
        >
          All
        </button>
        {drinkCategories.map(({ strCategory }, index) => (
          <button
            data-testid={ `${strCategory}-category-filter` }
            type="button"
            key={ index }
            onClick={ () => handleCategoryFilter(strCategory) }
          >
            {strCategory}
          </button>
        ))}
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
