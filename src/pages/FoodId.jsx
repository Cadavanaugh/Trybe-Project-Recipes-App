import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RecipesContext from '../context/RecipesContext';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import { fetchFoodRecipe } from '../services/fetchFoodsAndDrinks';

function FoodId() {
  const { setError } = useContext(RecipesContext);
  const { idReceita } = useParams();
  const [recipe, setRecipe] = useState([]);
  console.log(recipe);

  useEffect(() => {
    fetchFoodRecipe(idReceita, setRecipe, setError);
  }, []);

  const handleFavorite = () => {
    const favorite = {
      id: idReceita,
      type: 'food',
      nationality: recipe[0].strArea,
      category: recipe[0].strCategory,
      alcoholicOrNot: '',
      name: recipe[0].strMeal,
      image: recipe[0].strMealThumb,
    };

    if (localStorage.favoriteRecipes == null) localStorage.favoriteRecipes = '[]';
    const favs = JSON.parse(localStorage.favoriteRecipes);
    favs.push(favorite);
    localStorage.favoriteRecipes = JSON.stringify(favs);
  };

  return (
    <div>
      <img src="image" data-testid="recipe-photo" alt="algo" />
      <section>
        <h1 data-testid="recipe-title">{`title ${idReceita}`}</h1>
        <button type="button">
          <img data-testid="share-btn" src={ shareIcon } alt="share Icon" />
        </button>
        <button type="button" onClick={ handleFavorite }>
          <img data-testid="favorite-btn" src={ whiteHeartIcon } alt="Favorite Icon" />
        </button>
      </section>
      <h3 data-testid="recipe-category">Category</h3>
      {/* <p data-testid="${index}-ingredient-name-and-measure">Ingredientes</p> */}
      <section data-testid="instructions">
        <h4>Instructions</h4>
        <p>Lorem ipsum dolor </p>
      </section>
      <video muted width="320" height="240" controls>
        <source src="forrest_gump.mp4" type="video/mp4" />
      </video>
      {/* CARD */}
      <button data-testid="start-recipe-btn" type="button">Start Recipe</button>
    </div>
  );
}

export default FoodId;

// [{
//     id: id-da-receita,
//     type: food-ou-drink,
//     nationality: nacionalidade-da-receita-ou-texto-vazio,
//     category: categoria-da-receita-ou-texto-vazio,
//     alcoholicOrNot: alcoholic-ou-non-alcoholic-ou-texto-vazio,
//     name: nome-da-receita,
//     image: imagem-da-receita
// }]
