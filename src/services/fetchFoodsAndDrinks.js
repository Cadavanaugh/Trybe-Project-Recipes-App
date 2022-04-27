export const fetchFoods = (succcess, error, number) => {
  fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
    .then((response) => response.json()
      .then((json) => (response.ok
        ? succcess(json.meals.splice(number)) : error(json))));
};

export const fetchDrinks = (succcess, error, splice) => {
  fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=')
    .then((response) => response.json()
      .then((json) => (response.ok
        ? succcess(json.drinks.splice(splice)) : error(json))));
};
