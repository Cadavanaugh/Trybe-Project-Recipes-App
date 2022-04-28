export const fetchFoods = (succcess, error, startPosition, nPosition) => {
  fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
    .then((response) => response.json()
      .then((json) => (response.ok
        ? succcess(json.meals.splice(startPosition, nPosition)) : error(json))));
};

export const fetchDrinks = (succcess, error, startPosition, nPosition) => {
  fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=')
    .then((response) => response.json()
      .then((json) => (response.ok
        ? succcess(json.drinks.splice(startPosition, nPosition)) : error(json))));
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
