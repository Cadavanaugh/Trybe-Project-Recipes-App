import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Card from '../components/Card';
import RecipesContext from '../context/RecipesContext';
import Header from '../components/Header';
import '../styles/Foods.css';
import { fetchDrinksByCategory } from '../services/fetchFoodsAndDrinks';
import Footer from '../components/Footer';
import { doze, seis } from '../services/variables';

function Drinks({ location }) {
  const { drinks, drinkCategories, exploreDrinks,
    ingredientDrink, setIngredientDrink } = useContext(RecipesContext);
  const [categorizedDrinks, setCategorizedDrinks] = useState([]);
  const [isFilter, setIsFilter] = useState(false);
  const [renderCards, setRenderCards] = useState([]);
  const [category, setCategory] = useState('All');
  const [loading, setLoading] = useState(false);

  const handleCategoryFilter = async (choosenCategory) => {
    setIngredientDrink([]);
    console.log(category);
    console.log(choosenCategory);
    if (choosenCategory === category || choosenCategory === 'All') {
      setIsFilter(false);
    } else {
      setLoading(true);
      const filteredDrinks = await fetchDrinksByCategory(choosenCategory);
      setCategorizedDrinks(filteredDrinks);
      setIsFilter(true);
      setCategory(choosenCategory);
      setLoading(false);
    }
  };
  console.log(categorizedDrinks);
  // Usado para decidir o que deve ser renderizado
  useEffect(() => {
    if (ingredientDrink.length) {
      setRenderCards(ingredientDrink);
    } else if (isFilter) {
      setRenderCards(categorizedDrinks);
    } else if (location.explore) {
      setRenderCards(exploreDrinks);
    } else {
      setRenderCards(drinks);
    }
  }, [isFilter, drinks, ingredientDrink, exploreDrinks, categorizedDrinks]);
  console.log(renderCards);
  return (
    <>
      <Header pageTitle="Drinks" />
      <div>
        {
          drinkCategories.slice(0, seis).map(({ strCategory }, index) => (
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
        {loading ? <p>Loading...</p>
          : renderCards.slice(0, doze)
            .map(({ strDrinkThumb, idDrink, strDrink }, index) => (
              <Card
                key={ idDrink }
                name={ strDrink }
                img={ strDrinkThumb }
                index={ index }
                path={ `/drinks/${idDrink}` }
                testIDCard="recipe"
                testIDTitle="card-name"
              />))}
      </div>
      <Footer />
    </>

  );
}

Drinks.propTypes = {
  location: PropTypes.shape({
    explore: PropTypes.bool,
  }),
};

Drinks.defaultProps = {
  location: PropTypes.shape({
    explore: false,
  }),
};

export default Drinks;
