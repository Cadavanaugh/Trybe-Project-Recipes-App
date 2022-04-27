import React, { useContext } from 'react';
import Card from '../components/Card';
import RecipesContext from '../Context/RecipesContext';

function Drinks() {
  const { drinks } = useContext(RecipesContext);

  return (
    <div className="card-container">
      {drinks.map(({ strDrinkThumb, idDrink, strDrink }, index) => (<Card
        key={ idDrink }
        name={ strDrink }
        img={ strDrinkThumb }
        index={ index }
      />))}
    </div>
  );
}

export default Drinks;
