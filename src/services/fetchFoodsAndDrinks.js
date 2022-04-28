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
  const URL = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;
  const result = await fetch(URL);
  const data = await result.json();
  const limit = data.meals.splice(0, max);
  return limit;
};

export const fetchDrinksByCategory = (category) => {
  const result = fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`)
    .then((response) => response.json());
  return result;
};
