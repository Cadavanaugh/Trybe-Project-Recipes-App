/* eslint-disable react/prop-types */
import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import PageButton from '../components/PageButton';
// import { randomFoodRecipeAPI } from '../services/randomFoodRecipeAPI';

function ExploreFoods() {
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
      <PageButton
        targetPageTitle="Surprise me!"
        dataTestId="explore-surprise"
        routePath="/foods/surprise-food"
      />
    </div>
  );
}

export default ExploreFoods;
