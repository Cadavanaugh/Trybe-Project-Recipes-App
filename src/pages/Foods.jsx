import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Card from '../components/Card';
import Footer from '../components/Footer';
import Header from '../components/Header';
import RecipesContext from '../context/RecipesContext';
import { fetchFoodsByCategory } from '../services/fetchFoodsAndDrinks';
import { doze, seis } from '../services/variables';
import '../styles/Foods.css';

function Foods({ location }) {
  const { meals, foodCategories, exploreMeals,
    ingredientFood, setIngredientFood } = useContext(RecipesContext);
  const [categorizedMeals, setCategorizedMeals] = useState([]);
  const [isFilter, setIsFilter] = useState(false);
  const [renderCards, setRenderCards] = useState([]);
  const [category, setCategory] = useState('All');
  const [loading, setLoading] = useState(false);

  const handleCategoryFilter = async (choosenCategory) => {
    setIngredientFood([]);
    if (choosenCategory === category || choosenCategory === 'All') {
      setIsFilter(false);
    } else {
      setLoading(true);
      const filteredFoods = await fetchFoodsByCategory(choosenCategory);
      setCategorizedMeals(filteredFoods);
      setIsFilter(true);
      setCategory(choosenCategory);
      setLoading(false);
    }
  };

  // Usado para decidir o que deve ser renderizado
  useEffect(() => {
    if (ingredientFood.length) {
      setRenderCards(ingredientFood);
    } else if (isFilter) {
      setRenderCards(categorizedMeals);
    } else if (location.explore) {
      setRenderCards(exploreMeals);
    } else {
      setRenderCards(meals);
    }
  }, [meals, ingredientFood, exploreMeals, isFilter]);

  return (
    <>
      <Header pageTitle="Foods" />
      <div>
        {
          foodCategories.slice(0, seis).map(({ strCategory }, index) => (
            <button
              data-testid={ `${strCategory}-category-filter` }
              type="button"
              key={ index }
              onClick={ () => handleCategoryFilter(strCategory) }
            >
              {strCategory}
            </button>
          ))
        }
      </div>
      <div className="card-container">
        {loading
          ? (<p>Loading...</p>)
          : renderCards.slice(0, doze).map(({ strMealThumb, idMeal, strMeal }, index) => (
            <Card
              key={ idMeal }
              name={ strMeal }
              img={ strMealThumb }
              index={ index }
              path={ `/foods/${idMeal}` }
              testIDCard="recipe"
              testIDTitle="card-name"
            />))}

      </div>
      <Footer />
    </>

  );
}

Foods.propTypes = {
  location: PropTypes.shape({
    explore: PropTypes.bool,
  }),
};

Foods.defaultProps = {
  location: PropTypes.shape({
    explore: false,
  }),
};

export default Foods;
