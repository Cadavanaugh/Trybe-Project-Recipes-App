// const foodIngredientApi = async (ingredient) => {
//   const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
//   const data = await response.json();
//   return data;
// };

// const foodNameApi = async (name) => {
//   const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`);
//   const data = await response.json();
//   return data;
// };

// const foodFirstLetterApi = async (firstletter) => {
//   const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${firstletter}`);
//   const data = await response.json();
//   return data;
// };

const foodSearchAPI = async (valueSearchBar, valueInput) => {
  let url = '';
  if (valueSearchBar === 'ingredient') {
    url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${valueInput}`;
  }
  if (valueSearchBar === 'name') {
    url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${valueInput}`;
  }
  if (valueSearchBar === 'firstLetter') {
    url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${valueInput}`;
  }
  const response = await fetch(url);
  const data = await response.json();
  return data;
};
export default foodSearchAPI;
