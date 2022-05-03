import React, { useContext, useEffect, useState } from 'react';
import Card from '../components/Card';
import Footer from '../components/Footer';
import Header from '../components/Header';
import RecipesContext from '../context/RecipesContext';
import { fetchFoodsByCategory } from '../services/fetchFoodsAndDrinks';
import '../styles/Foods.css';

const max = 12;
const maxCategoriesToShow = 6;

function Foods() {
  const { meals, foodCategories,
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
    } else {
      setRenderCards(meals);
    }
  }, [isFilter, meals, categorizedMeals, ingredientFood]);

  return (
    <>
      <Header pageTitle="Foods" />
      <div>
        {
          foodCategories.slice(0, maxCategoriesToShow).map(({ strCategory }, index) => (
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
          : renderCards.slice(0, max).map(({ strMealThumb, idMeal, strMeal }, index) => (
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

export default Foods;
