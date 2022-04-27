import React, { useContext } from 'react';
import Card from '../components/Card';
import Footer from '../components/Footer';
import Header from '../components/Header';
import RecipesContext from '../context/RecipesContext';
// import './Foods.css';

function Drinks() {
  const { drinks } = useContext(RecipesContext);

  return (
    <>
      <Header pageTitle="Drinks" />
      <div className="card-container">
        {drinks.length && drinks
          .map(({ strDrinkThumb, idDrink, strDrink }, index) => (<Card
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
