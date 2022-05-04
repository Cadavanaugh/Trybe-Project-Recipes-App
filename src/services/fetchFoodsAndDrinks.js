export const fetchFoods = (succcess, error) => {
  fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
    .then((response) => response.json()
      .then((json) => (response.ok
        ? succcess(json.meals) : error(json))));
};

export const fetchDrinks = (succcess, error) => {
  fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=')
    .then((response) => response.json()
      .then((json) => (response.ok
        ? succcess(json.drinks) : error(json))));
};

export const fetchFoodsByCategory = async (category) => {
  const max = 12;
  const result = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
  const data = await result.json();
  const limit = data.meals.splice(0, max);
  return limit;
};

export const fetchDrinksByCategory = async (category) => {
  const max = 12;
  const result = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`);
  const data = await result.json();
  const limit = data.drinks.splice(0, max);
  return limit;
};

export const fetchDrinkById = async (drinkId) => {
  const result = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?${drinkId}`);
  const data = await result.json();
  return data;
};

export const fetchFoodRecipe = (id, succcess, fail) => {
  fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then((response) => response.json()
      .then((json) => (response.ok
        ? succcess(json.meals) : fail(json))));
};

export const fetchDrinkRecipe = (idDrink, succcess, failDrink) => {
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`)
    .then((response) => response.json()
      .then((json) => (response.ok
        ? succcess(json.drinks) : failDrink(json))));
};

export const fetchRecipesByIngredient = (ingredient, succcessByIngredient, fail) => {
  fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
    .then((response) => response.json()
      .then((json) => (response.ok
        ? succcessByIngredient(json.meals) : fail(json))));
};

export const fetchSurpriseMe = async () => {
  const result = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
  const data = await result.json();
  return data.meals;
};
