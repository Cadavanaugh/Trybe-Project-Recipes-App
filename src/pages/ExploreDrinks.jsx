import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Footer from '../components/Footer';
import Header from '../components/Header';
import PageButton from '../components/PageButton';
import { fetchSurpriseMeDrink } from '../services/fetchFoodsAndDrinks';

function ExploreDrinks() {
  const history = useHistory();
  const handleSurpriseMe = async () => {
    const surprise = await fetchSurpriseMeDrink();
    const id = surprise[0].idDrink;
    history.push(`/drinks/${id}`);
  };
  return (
    <div>
      <Header showSearchButton pageTitle="Explore Drinks" />
      <Footer />
      <PageButton
        targetPageTitle="By Ingredient"
        dataTestId="explore-by-ingredient"
        routePath="/explore/drinks/ingredients"
      />
      <button
        type="button"
        data-testid="explore-surprise"
        onClick={ handleSurpriseMe }
      >
        Surprise me!
      </button>
    </div>
  );
}

export default ExploreDrinks;
