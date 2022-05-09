import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Footer from '../components/Footer';
import Header from '../components/Header';
import PageButton from '../components/PageButton';
import { fetchSurpriseMeDrink } from '../services/fetchFoodsAndDrinks';
import style from '../styles/ExploreFoodsAndDrinks.module.css';

function ExploreDrinks() {
  const history = useHistory();
  const handleSurpriseMe = async () => {
    const surprise = await fetchSurpriseMeDrink();
    const id = surprise[0].idDrink;
    history.push(`/drinks/${id}`);
  };
  return (
    <div className={ style.container }>
      <Header showSearchButton pageTitle="Explore Drinks" />
      <Footer />
      <div className={ style['button-container'] }>
        <PageButton
          targetPageTitle="By Ingredient"
          dataTestId="explore-by-ingredient"
          routePath="/explore/drinks/ingredients"
        />
        <button
          className={ style.button }
          type="button"
          data-testid="explore-surprise"
          onClick={ handleSurpriseMe }
        >
          Surprise me!
        </button>
      </div>
    </div>
  );
}

export default ExploreDrinks;
