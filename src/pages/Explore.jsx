import React from 'react';
import Header from '../components/Header';
import MenuInferior from '../components/MenuInferior';

function Explore() {
  return (
    <div>
      <Header
        pageTitle="Explore"
        showSearchButton
      />
      <MenuInferior />
    </div>
  );
}

export default Explore;
