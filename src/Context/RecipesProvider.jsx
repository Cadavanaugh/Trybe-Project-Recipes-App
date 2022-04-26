import React from 'react';
import RecipesContext from './RecipesContext';

function RecipesProvider({ children }) {
  return (
      <RecipesContext.Provider value={ {algo} } >
        { children }
      </RecipesContext.Provider>
  );
}

export default RecipesProvider;
