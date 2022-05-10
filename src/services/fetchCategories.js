export const fetchFoodCategories = (succcess, error) => {
  fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list')
    .then((response) => response.json()
      .then((json) => (response.ok
        ? succcess([
          { strCategory: 'All' },
          ...json.meals])
        : error(json))));
};

export const fetchDrinkCategories = (succcess, error) => {
  fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
    .then((response) => response.json()
      .then((json) => (response.ok
        ? succcess([
          { strCategory: 'All' },
          ...json.drinks])
        : error(json))));
};

export const fetchNationalities = (succcess, error) => {
  fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list')
    .then((result) => result.json()
      .then((json) => (result.ok
        ? succcess([
          { strArea: 'All' },
          ...json.meals])
        : error(json))));
};
