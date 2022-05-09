import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Footer from '../components/Footer';
import Header from '../components/Header';
import PageButton from '../components/PageButton';
import { fetchSurpriseMeFood } from '../services/fetchFoodsAndDrinks';
import style from '../styles/ExploreFoodsAndDrinks.module.css';

function ExploreFoods() {
  const history = useHistory();
  const handleSurpriseMe = async () => {
    const surprise = await fetchSurpriseMeFood();
    const id = surprise[0].idMeal;
    history.push(`/foods/${id}`);
  };

  return (
    <div className={ style.container }>
      <Header showSearchButton pageTitle="Explore Foods" />
      <div className={ style['button-container'] }>
        <PageButton
          targetPageTitle="By Ingredient"
          dataTestId="explore-by-ingredient"
          routePath="/explore/foods/ingredients"
        />
        <PageButton
          targetPageTitle="By Nationality"
          dataTestId="explore-by-nationality"
          routePath="/explore/foods/nationalities"
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
      {/* <PageButton
        targetPageTitle="Surprise me!"
        dataTestId="explore-surprise"
        routePath="/foods/:idReceita"
      /> */}
      <Footer />
    </div>
  );
}

export default ExploreFoods;
