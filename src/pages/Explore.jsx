import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageButton from '../components/PageButton';
import style from '../styles/Explore.module.css';
import remy from '../images/remy.png';

function Explore() {
  return (
    <div className={ style['explore-container'] }>
      <Header
        pageTitle="Explore"
        showSearchButton
        className={ style.header }
      />
      <div className={ style['button-container'] }>
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
      </div>
      <img src={ remy } alt="Remy with a spoon" className={ style.remy } />
      <Footer />
    </div>
  );
}

export default Explore;
