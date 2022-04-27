import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import RecipesContext from './RecipesContext';
import { fetchFoods, fetchDrinks } from '../services/fetchFoodsAndDrinks';

function RecipesProvider({ children }) {
  const [foods, setFoods] = useState({});
  const [drinks, setDrinks] = useState({});
  const [error, setError] = useState({});
  console.log(foods);

  useEffect(() => {
    fetchFoods(setFoods, setError);
    fetchDrinks(setDrinks, setError);
  }, []);

  const context = {
    foods,
    drinks,
    error,
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
