const fetchIngredients = async () => {
  const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list');
  const results = await response.json();
  return results;
};

export default fetchIngredients;
