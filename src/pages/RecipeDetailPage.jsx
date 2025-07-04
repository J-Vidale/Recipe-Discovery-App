import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { getRecipeById } from '../api/mealdb';
import Spinner from '../components/Spinner';
import ErrorMessage from '../components/ErrorMessage';
import { useFavorites } from '../contexts/FavoritesContext';

export default function RecipeDetailPage() {
  const { recipeId } = useParams();
  const { data: meal, loading, error } = useFetch(getRecipeById, recipeId);
  const { isFavorite, addFavorite, removeFavorite } = useFavorites();

  if (loading) return <Spinner />;
  if (error) return <ErrorMessage error={error} />;
  if (!meal) return <div>Recipe not found.</div>;

  const fav = isFavorite(meal.idMeal);

  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ing = meal[`strIngredient${i}`];
    const amt = meal[`strMeasure${i}`];
    if (ing) ingredients.push(`${amt} ${ing}`);
  }

  return (
    <div>
      <h2>{meal.strMeal}</h2>
      <img src={meal.strMealThumb} alt={meal.strMeal} style={{ maxWidth: '300px' }} />
      <button onClick={() => (fav ? removeFavorite(meal.idMeal) : addFavorite(meal.idMeal))}>
        {fav ? '★ Remove from Favorites' : '☆ Add to Favorites'}
      </button>
      <h3>Ingredients</h3>
      <ul>{ingredients.map((i, idx) => <li key={idx}>{i}</li>)}</ul>
      <h3>Instructions</h3>
      <p>{meal.strInstructions}</p>
    </div>
  );
}
