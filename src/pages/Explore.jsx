/* eslint-disable react/prop-types */
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageButton from '../components/PageButton';

function Explore() {
  return (
    <div>
      <Header
        pageTitle="Explore"
        showSearchButton
      />
      <PageButton
        targetPageTitle="Explore Foods"
        dataTestId="explore-foods"
        routePath="/explore/foods"
      />
      <PageButton
        targetPageTitle="Explore Drinks"
        dataTestId="explore-drinks"
        routePath="/explore/drinks"
      />
      <Footer />
    </div>
  );
}

export default Explore;
