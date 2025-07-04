import useFetch from '../hooks/useFetch';
import { getRecipeById } from '../api/mealdb';
import { useFavorites } from '../contexts/FavoritesContext';
import Spinner from '../components/Spinner';
import ErrorMessage from '../components/ErrorMessage';
import RecipeCard from '../components/RecipeCard';

export default function FavoritesPage() {
  const { favorites } = useFavorites();

  if (favorites.length === 0) {
    return <p>No favorites yet. Browse categories and add some!</p>;
  }

  return (
    <div className="grid">
      {favorites.map((id) => (
        <FavoriteLoader key={id} id={id} />
      ))}
    </div>
  );
}

function FavoriteLoader({ id }) {
  const { data: meal, loading, error } = useFetch(getRecipeById, id);

  if (loading) return <Spinner />;
  if (error) return <ErrorMessage error={error} />;
  return <RecipeCard meal={meal} />;
}
