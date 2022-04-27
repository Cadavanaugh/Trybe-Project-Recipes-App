const splice = 13;
export const fetchFoods = (succcess, error) => {
  fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
    .then((response) => response.json()
      .then((json) => (response.ok
        ? succcess(json.meals.splice(splice)) : error(json))));
};

export const fetchDrinks = (succcess, error) => {
  fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=')
    .then((response) => response.json()
      .then((json) => (response.ok ? succcess(json) : error(json))));
};
