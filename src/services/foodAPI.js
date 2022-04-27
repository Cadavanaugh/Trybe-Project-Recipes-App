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

const foodSearchAPI = async (value) => {
  let url = '';
  if (value === 'ingredient') {
    url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${value}`;
  }
  if (value === 'name') {
    url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${value}`;
  }
  if (value === 'firstLetter') {
    url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${value}`;
  }
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  return data;
};
export default foodSearchAPI;
