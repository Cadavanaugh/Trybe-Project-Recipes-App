import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Footer from '../components/Footer';
import Header from '../components/Header';
import PageButton from '../components/PageButton';
import { fetchSurpriseMeFood } from '../services/fetchFoodsAndDrinks';
// import { randomFoodRecipeAPI } from '../services/randomFoodRecipeAPI';

function ExploreFoods() {
  const history = useHistory();
  const handleSurpriseMe = async () => {
    const surprise = await fetchSurpriseMeFood();
    const id = surprise[0].idMeal;
    history.push(`/foods/${id}`);
  };

  return (
    <div>
      <Header showSearchButton pageTitle="Explore Foods" />
      <Footer />
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
        type="button"
        data-testid="explore-surprise"
        onClick={ handleSurpriseMe }
      >
        Surprise me!
      </button>
      {/* <PageButton
        targetPageTitle="Surprise me!"
        dataTestId="explore-surprise"
        routePath="/foods/:idReceita"
      /> */}
    </div>
  );
}

export default ExploreFoods;
