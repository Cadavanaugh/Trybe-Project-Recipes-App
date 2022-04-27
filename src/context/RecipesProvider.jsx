import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import foodSearchAPI from '../services/foodAPI';
import RecipesContext from './RecipesContext';
import { fetchFoods, fetchDrinks } from '../services/fetchFoodsAndDrinks';
import { fetchDrinkCategories, fetchFoodCategories } from '../services/fetchCategories';

const position = 12;
const catPosition = 5;

function RecipesProvider({ children }) {
  const [ingredientFood, setIngredientFood] = useState([]);
  const [radioSearch, setRadioSearch] = useState('ingredient');
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

  // useEffect(() => {
  //   async function fetchFoodIngredient() {
  //     const data = await foodIngredientApi('');
  //     setIngredientFood(data.meals);
  //     console.log((data));
  //   }
  //   fetchFoodIngredient();
  // }, []);

  const valueRadioButton = ({ target }) => {
    setRadioSearch(target.value);
  };

  const searchFoods = async () => {
    const data = await foodSearchAPI(radioSearch);
    setIngredientFood(data.meals);
    console.log(data);
  };

  const store = {
    ingredientFood,
    radioSearch,
    valueRadioButton,
    searchFoods,
    meals,
    drinks,
  };

  return (
    <RecipesContext.Provider value={ store }>
      { children }
    </RecipesContext.Provider>
  );
}

RecipesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RecipesProvider;
