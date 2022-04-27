import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import RecipesContext from './RecipesContext';
import { fetchFoods, fetchDrinks } from '../services/fetchFoodsAndDrinks';

const splice = 13;

function RecipesProvider({ children }) {
  const [meals, setMeals] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [error, setError] = useState({});
  console.log(error);

  useEffect(() => {
    fetchFoods(setMeals, setError, splice);
    fetchDrinks(setDrinks, setError, splice);
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
