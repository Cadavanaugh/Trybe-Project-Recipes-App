import React, { useContext } from 'react';
import Card from '../components/Card';
import RecipesContext from '../Context/RecipesContext';
// import './Foods.css';

function Drinks() {
  const { drinks } = useContext(RecipesContext);
  console.log(drinks);

  return (
    <div className="card-container">
      {drinks.length && drinks.map(({ strDrinkThumb, idDrink, strDrink }, index) => (<Card
        key={ idDrink }
        name={ strDrink }
        img={ strDrinkThumb }
        index={ index }
      />))}
    </div>
  );
}

export default Drinks;
