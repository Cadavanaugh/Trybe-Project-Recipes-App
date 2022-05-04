import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import RecipesContext from '../context/RecipesContext';
import { fetchRecipesByIngredient } from '../services/fetchFoodsAndDrinks';
import { doze } from '../services/variables';

function ExploreDrinksIngredients() {
  const { setError, setExploreDrinks } = useContext(RecipesContext);
  const [info, setInfo] = useState({});

  useEffect(() => {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list')
      .then((response) => response.json())
      .then((response) => {
        setInfo(response);
        console.log(response);
      });
  }, []);

  const handleClick = (ingr) => {
    fetchRecipesByIngredient(ingr, setExploreDrinks, setError);
  };

  const imgAPI = 'https://www.thecocktaildb.com/images/ingredients';
  return (
    <>
      <Header pageTitle="Explore Ingredients" showSearchButton />
      {info.drinks && (
        <div>
          {info.drinks.map((ingredient, index) => (
            index < doze && (
              <Link
                key={ index }
                exact="true"
                to={ { pathname: '/drinks', explore: true } }
                onClick={ () => handleClick((ingredient.strIngredient)) }
              >
                <div
                  key={ index }
                  data-testid={ `${index}-ingredient-card` }
                >
                  <img
                    src={ `${imgAPI}/${ingredient.strIngredient1}-Small.png` }
                    alt={ ingredient.strIngredient1 }
                    width="100px"
                    data-testid={ `${index}-card-img` }
                  />
                  <p
                    data-testid={ `${index}-card-name` }
                  >
                    {ingredient.strIngredient1}
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

export default ExploreDrinksIngredients;
