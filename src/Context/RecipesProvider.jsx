import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import RecipesContext from './RecipesContext';
import { fetchFoods, fetchDrinks } from '../services/fetchFoodsAndDrinks';
import { fetchDrinkCategories, fetchFoodCategories } from '../services/fetchCategories';

const position = 12;
const catPosition = 5;

function RecipesProvider({ children }) {
  const [meals, setMeals] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [error, setError] = useState({});
  const [foodCategories, setFoodCategories] = useState([]);
  const [drinkCategories, setDrinkCategories] = useState([]);
  console.log(error);
  console.log(foodCategories);
  console.log(drinkCategories);

  useEffect(() => {
    fetchFoods(setMeals, setError, 0, position);
    fetchDrinks(setDrinks, setError, 0, position);
    fetchFoodCategories(setFoodCategories, setError, 0, catPosition);
    fetchDrinkCategories(setDrinkCategories, setError, 0, catPosition);
  }, []);

  const context = {
    meals,
    drinks,
  };

  return (
    <RecipesContext.Provider value={ context }>
      { children }
    </RecipesContext.Provider>
  );
}

RecipesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RecipesProvider;
