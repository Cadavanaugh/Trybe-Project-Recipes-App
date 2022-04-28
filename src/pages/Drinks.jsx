import React, { useContext, useState, useEffect } from 'react';
import Card from '../components/Card';
import RecipesContext from '../context/RecipesContext';
import Header from '../components/Header';
import '../styles/Foods.css';
import { fetchDrinksByCategory } from '../services/fetchFoodsAndDrinks';
import Footer from '../components/Footer';
// import './Foods.css';

function Drinks() {
  const { drinks, drinkCategories } = useContext(RecipesContext);
  const [categorizedDrinks, setCategorizedDrinks] = useState([]);
  const [isFilter, setIsFilter] = useState(false);
  const [renderCards, setRenderCards] = useState([]);
  const [category, setCategory] = useState('All');
  const [loading, setLoading] = useState(false);
  const maxCategoriesToShow = 6;

  const handleCategoryFilter = async (choosenCategory) => {
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

  // Usado para decidir o que deve ser renderizado
  useEffect(() => {
    if (isFilter) {
      setRenderCards(categorizedDrinks);
    } else {
      setRenderCards(drinks);
    }
  }, [isFilter, drinks, categorizedDrinks]);

  console.log(renderCards);
  return (
    <>
      <Header pageTitle="Drinks" />
      <div>
        {
          drinkCategories.slice(0, maxCategoriesToShow).map(({ strCategory }, index) => ( // falha nos testes por causa do delay
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
          : renderCards.map(({ strDrinkThumb, idDrink, strDrink }, index) => (
            <Card
              key={ idDrink }
              name={ strDrink }
              img={ strDrinkThumb }
              index={ index }
            />))}
      </div>
      <Footer />
    </>

  );
}

export default Drinks;
