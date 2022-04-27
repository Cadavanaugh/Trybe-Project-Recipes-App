export const fetchFoodCategories = (succcess, error, inicPosition, nPositions) => {
  fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list')
    .then((response) => response.json()
      .then((json) => (response.ok
        ? succcess(json.meals.splice(inicPosition, nPositions)) : error(json))));
};

export const fetchDrinkCategories = (succcess, error, inicPosition, nPositions) => {
  fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
    .then((response) => response.json()
      .then((json) => (response.ok
        ? succcess(json.drinks.splice(inicPosition, nPositions)) : error(json))));
};
