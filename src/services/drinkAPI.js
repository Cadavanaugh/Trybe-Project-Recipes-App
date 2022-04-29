const drinkSearchAPI = async (valueSearchBar, valueInput) => {
  let url = '';
  if (valueSearchBar === 'ingredient') {
    url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${valueInput}`;
  }
  if (valueSearchBar === 'name') {
    url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${valueInput}`;
  }
  if (valueSearchBar === 'firstLetter') {
    url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${valueInput}`;
  }
  const response = await fetch(url);
  const data = await response.json();
  return data;
};
export default drinkSearchAPI;
