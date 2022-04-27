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
