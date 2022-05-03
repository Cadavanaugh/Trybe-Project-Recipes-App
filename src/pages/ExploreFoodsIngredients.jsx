import React, { useEffect, useState } from 'react';

function ExploreFoodsIngredients() {
  const [info, setInfo] = useState({});
  //
  // endpoints:
  //
  // categorias: https://www.themealdb.com/api/json/v1/1/list.php?c=list
  // nacionalidades: https://www.themealdb.com/api/json/v1/1/list.php?a=list
  // ingredientes: https://www.themealdb.com/api/json/v1/1/list.php?i=list
  //
  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list')
      .then((response) => response.json())
      .then((response) => {
        setInfo(response);
        console.log(response);
      });
  }, []);
  const maxShowed = 12;
  return (
    <div>
      {info.meals && (
        <ul>
          {info.meals.map((ingredient, index) => (
            <li key={ ingredient.idIngredient }>
              {index < maxShowed && ingredient.strIngredient}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ExploreFoodsIngredients;
