import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import drinkSearchAPI from '../services/drinkAPI';
import { fetchDrinkCategories, fetchFoodCategories } from '../services/fetchCategories';
import { fetchDrinks, fetchFoods } from '../services/fetchFoodsAndDrinks';
import foodSearchAPI from '../services/foodAPI';
import RecipesContext from './RecipesContext';

const position = 12;
const catPosition = 5;

function RecipesProvider({ children }) {
  const { pathname } = useLocation();
  const [ingredientFood, setIngredientFood] = useState([]);
  const [radioSearch, setRadioSearch] = useState('');
  const [inputSearch, setInputSearch] = useState('');
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

  const valueInputsRadios = ({ target }) => {
    setRadioSearch(target.value);
  };

  const valueInputs = ({ target }) => {
    setInputSearch(target.value);
  };

  const searchFoods = async () => {
    if (radioSearch === 'firstLetter' && inputSearch.length > 1) {
      global.alert('Your search must have only 1 (one) character');
    } else {
      const data = await foodSearchAPI(radioSearch, inputSearch);
      setIngredientFood(data.meals);
      console.log(data);
    }
  };

  const searchDrinks = async () => {
    if (radioSearch === 'firstLetter' && inputSearch.length > 1) {
      global.alert('Your search must have only 1 (one) character');
    } else {
      const data = await drinkSearchAPI(radioSearch, inputSearch);
      setIngredientFood(data.drinks);
      console.log(data);
    }
  };

  const store = {
    ingredientFood,
    radioSearch,
    valueInputsRadios,
    valueInputs,
    searchFoods,
    meals,
    drinks,
    inputSearch,
    pathname,
    searchDrinks,
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
