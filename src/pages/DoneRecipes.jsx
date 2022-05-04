import React, { useState } from 'react';
import DoneCard from '../components/DoneCard';
import Header from '../components/Header';

// [{
//     id: id-da-receita,
//     type: comida-ou-bebida,
//     nationality: nacionalidade-da-receita-ou-texto-vazio,
//     category: categoria-da-receita-ou-texto-vazio,
//     alcoholicOrNot: alcoholic-ou-non-alcoholic-ou-texto-vazio,
//     name: nome-da-receita,
//     image: imagem-da-receita,
//     doneDate: quando-a-receita-foi-concluida,
//     tags: array-de-tags-da-receita-ou-array-vazio
// }]

function DoneRecipes() {
  if (!localStorage.doneRecipes) localStorage.doneRecipes = '[]';
  const localStored = JSON.parse(localStorage.doneRecipes);
  const [done, setDone] = useState(localStored);

  return (
    <>
      <Header pageTitle="Favorite Recipes" showSearchButton />
      <div>
        <button
          data-testid="filter-by-all-btn"
          type="button"
          onClick={ () => setDone(localStored) }
        >
          All
        </button>
        <button
          data-testid="filter-by-food-btn"
          type="button"
          onClick={ () => setDone(done.filter((x) => x.type === 'food')) }
        >
          Food
        </button>
        <button
          data-testid="filter-by-drink-btn"
          type="button"
          onClick={ () => setDone(done.filter((x) => x.type === 'drink')) }
        >
          Drinks
        </button>
      </div>
      {
        done.map((x, i) => (
          <DoneCard
            key={ i }
            img={ x.image }
            name={ x.name }
            category={ x.category }
            nationality={ x.nationality }
            type={ x.type }
            alcohol={ x.alcoholicOrNot }
            index={ i }
            id={ x.id }
            doneDate={ x.doneDate }
            tags={ x.tags }
          />
        ))
      }
    </>
  );
}

export default DoneRecipes;
