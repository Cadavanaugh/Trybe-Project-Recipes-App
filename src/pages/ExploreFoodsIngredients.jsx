import React, { useEffect, useState } from 'react';
// import { Card } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import Header from '../components/Header';

function ExploreFoodsIngredients() {
  const [info, setInfo] = useState({});
  //
  // endpoints:
  //
  // categorias: https://www.themealdb.com/api/json/v1/1/list.php?c=list
  // nacionalidades: https://www.themealdb.com/api/json/v1/1/list.php?a=list
  // ingredientes: https://www.themealdb.com/api/json/v1/1/list.php?i=list
  // imagens dos ingredientes: https://www.themealdb.com/images/ingredients/{nome-do-ingrediente}-Small.png
  //
  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list')
      .then((response) => response.json())
      .then((response) => {
        setInfo(response);
        console.log(response);
      });
  }, []);

  const maxIngToShow = 12;
  const imgAPI = 'https://www.themealdb.com/images/ingredients';
  return (
    <>
      <Header pageTitle="Explore Ingredients" showSearchButton />
      {info.meals && (
        <div>
          {info.meals.map((ingredient, index) => (
            index < maxIngToShow && (
              <div
                key={ index }
                data-testid={ `${index}-ingredient-card` }
              >
                {/* <Link exact="true" to={ path }> */}
                <img
                  src={ `${imgAPI}/${ingredient.strIngredient}-Small.png` }
                  alt={ ingredient.strIngredient }
                  width="100px"
                  data-testid={ `${index}-card-img` }
                />
                {/* </Link> */}
                <p
                  data-testid={ `${index}-card-name` }
                >
                  {ingredient.strIngredient}

                </p>
              </div>
            )
          ))}
        </div>
      )}
    </>
  );
}

export default ExploreFoodsIngredients;
