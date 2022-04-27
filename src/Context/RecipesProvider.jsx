import PropTypes from 'prop-types';
import React, { useState } from 'react';
import foodSearchAPI from '../services/foodAPI';
import RecipesContext from './RecipesContext';

function RecipesProvider({ children }) {
  const [ingredientFood, setIngredientFood] = useState([]);
  const [radioSearch, setRadioSearch] = useState('ingredient');

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
