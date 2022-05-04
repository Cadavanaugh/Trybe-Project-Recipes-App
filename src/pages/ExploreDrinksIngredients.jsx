import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
// import { Card } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import Header from '../components/Header';

function ExploreDrinksIngredients() {
  const [info, setInfo] = useState({});
  //
  // endpoints:
  //
  // ingredientes: https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list
  // imagens dos ingredientes: www.thecocktaildb.com/images/ingredients/{nome do ingrediente}-Small.png
  //
  useEffect(() => {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list')
      .then((response) => response.json())
      .then((response) => {
        setInfo(response);
        console.log(response);
      });
  }, []);

  const maxIngToShow = 12;
  const imgAPI = 'https://www.thecocktaildb.com/images/ingredients';
  return (
    <>
      <Header pageTitle="Explore Ingredients" showSearchButton />
      {info.drinks && (
        <div>
          {info.drinks.map((ingredient, index) => (
            index < maxIngToShow && (
              <div
                key={ index }
                data-testid={ `${index}-ingredient-card` }
              >
                {/* <Link exact="true" to={ path }> */}
                <img
                  src={ `${imgAPI}/${ingredient.strIngredient1}-Small.png` }
                  alt={ ingredient.strIngredient1 }
                  width="100px"
                  data-testid={ `${index}-card-img` }
                />
                {/* </Link> */}
                <p
                  data-testid={ `${index}-card-name` }
                >
                  {ingredient.strIngredient1}

                </p>
              </div>
            )
          ))}
        </div>
      )}
      <Footer />
    </>
  );
}

export default ExploreDrinksIngredients;
