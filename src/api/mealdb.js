const BASE = 'https://www.themealdb.com/api/json/v1/1';

export async function getCategories() {
  const res = await fetch(`${BASE}/categories.php`);
  const json = await res.json();
  return json.categories;
}

export async function getByCategory(category) {
  const res = await fetch(`${BASE}/filter.php?c=${category}`);
  const json = await res.json();
  return json.meals;
}

export async function getRecipeById(id) {
  const res = await fetch(`${BASE}/lookup.php?i=${id}`);
  const json = await res.json();
  return json.meals?.[0];
}

export async function searchMeals(query) {
  const res = await fetch(`${BASE}/search.php?s=${query}`);
  const json = await res.json();
  return json.meals;
}
