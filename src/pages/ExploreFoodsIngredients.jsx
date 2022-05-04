import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import RecipesContext from '../context/RecipesContext';
import { fetchRecipesByIngredient } from '../services/fetchFoodsAndDrinks';
import { doze } from '../services/variables';

function ExploreFoodsIngredients() {
  const { setError, setExploreMeals } = useContext(RecipesContext);
  const [info, setInfo] = useState({});

  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list')
      .then((response) => response.json())
      .then((response) => {
        setInfo(response);
        console.log(response);
      });
  }, []);

  const handleClick = (ingr) => {
    fetchRecipesByIngredient(ingr, setExploreMeals, setError);
  };

  const imgAPI = 'https://www.themealdb.com/images/ingredients';
  return (
    <>
      <Header pageTitle="Explore Ingredients" showSearchButton />
      {info.meals && (
        <div>
          {info.meals.map((ingredient, index) => (
            index < doze && (
              <Link
                exact="true"
                to={ { pathname: '/foods', explore: true } }
                onClick={ () => handleClick((ingredient.strIngredient)) }
              >
                <div
                  key={ index }
                  data-testid={ `${index}-ingredient-card` }
                >
                  <img
                    src={ `${imgAPI}/${ingredient.strIngredient}-Small.png` }
                    alt={ ingredient.strIngredient }
                    width="100px"
                    data-testid={ `${index}-card-img` }
                  />

                  <p
                    data-testid={ `${index}-card-name` }
                  >
                    {ingredient.strIngredient}
                  </p>
                </div>
              </Link>
            )
          ))}
        </div>
      )}
      <Footer />
    </>
  );
}

export default ExploreFoodsIngredients;
