import React, { useState, useContext, useEffect } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import RecipesContext from '../context/RecipesContext';
import Card from '../components/Card';
import { doze } from '../services/variables';
import { fetchFoodsByNationality } from '../services/fetchFoodsAndDrinks';
// import { fetchNationalities } from '../services/fetchCategories';

function Nationalities() {
  const { meals } = useContext(RecipesContext);
  const [loading, setLoading] = useState(false);
  const [renderCards, setRenderCards] = useState([]);
  const [nationalities, setNationalities] = useState([]);
  const [mealsByNationality, setMealsByNationality] = useState([]);
  const [isFilter, setIsFilter] = useState(false);
  console.log(mealsByNationality);
  // const [category, setCategory] = useState('All');

  const handleSelect = async ({ target }) => {
    console.log(target.value);
    if (target.value === 'All') {
      setIsFilter(false);
      setRenderCards(meals);
    } else {
      setLoading(true);
      const filteredFoods = await fetchFoodsByNationality(target.value); // fazer o fetch desta
      setMealsByNationality(filteredFoods);
      setIsFilter(true);
      setLoading(false);
    }
  };

  // useEffect(() => {
  //   fetchNationalities(setNationalities, setError);
  // }, []);

  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list')
      .then((response) => response.json())
      .then((response) => {
        setNationalities([{ strArea: 'All' }, ...response.meals]);
        console.log(response);
      });
  }, []);

  // Usado para decidir o que deve ser renderizado
  useEffect(() => {
    if (!isFilter) {
      setRenderCards(meals);
    } else if (mealsByNationality) {
      setRenderCards(mealsByNationality);
    }
  }, [meals, isFilter, mealsByNationality]);
  console.log(nationalities);

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
            value={ nationality.strArea }
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
