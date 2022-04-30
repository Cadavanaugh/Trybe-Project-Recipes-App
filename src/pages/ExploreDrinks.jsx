import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import PageButton from '../components/PageButton';

function ExploreDrinks() {
  return (
    <div>
      <Header showSearchButton pageTitle="Explore Drinks" />
      <Footer />
      <PageButton
        targetPageTitle="By Ingredient"
        dataTestId="explore-by-ingredient"
        routePath="/explore/drinks/ingredients"
      />
      <PageButton
        targetPageTitle="Surprise me!"
        dataTestId="explore-surprise"
        // routePath="/explore/drinks"
      />
    </div>
  );
}

export default ExploreDrinks;
