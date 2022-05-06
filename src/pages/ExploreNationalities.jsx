import React, { useState, useEffect, useContext } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { fetchNationalities } from '../services/fetchCategories';
import RecipesContext from '../context/RecipesContext';
import Card from '../components/Card';

function Nationalities() {
  // const { meals, foodCategories, exploreMeals,
  //   ingredientFood, setIngredientFood } = useContext(RecipesContext);
  const { setError } = useContext(RecipesContext);
  const [nationalities, setNationalities] = useState();
  const [loading, setLoading] = useState(false);

  // const [categorizedMeals, setCategorizedMeals] = useState([]);
  // const [isFilter, setIsFilter] = useState(false);
  // const [renderCards, setRenderCards] = useState([]);
  // const [category, setCategory] = useState('All');

  useEffect(() => {
    fetchNationalities(setNationalities, setError);
  });

  const handleSelect = async (choosenCategory) => {
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
  // useEffect(() => {
  //   if (ingredientFood.length) {
  //     setRenderCards(ingredientFood);
  //   } else if (isFilter) {
  //     setRenderCards(categorizedMeals);
  //   } else if (location.explore) {
  //     setRenderCards(exploreMeals);
  //   } else {
  //     setRenderCards(meals);
  //   }
  // }, [meals, ingredientFood, exploreMeals, isFilter, categorizedMeals]);
  // console.log(nationalities);

  return (
    <div>
      <Header pageTitle="Explore Nationalities" />

      <select
        data-testid="explore-by-nationality-dropdown"
        onChange={ handleSelect }
      >
        {nationalities.map((nationality, index) => (
          <option
            key={ index }
            data-testid={ `${nationality.strArea}-option` }
          >
            {nationality.strArea}
          </option>
        ))}
      </select>

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
    </div>
  );
}

// Foods.propTypes = {
//   location: PropTypes.shape({
//     explore: PropTypes.bool,
//   }),
// };

// Foods.defaultProps = {
//   location: PropTypes.shape({
//     explore: false,
//   }),
// };

export default Nationalities;
