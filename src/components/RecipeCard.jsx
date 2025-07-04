import { Link } from 'react-router-dom';
import { useFavorites } from '../contexts/FavoritesContext';

export default function RecipeCard({ meal }) {
  const { idMeal, strMeal, strMealThumb } = meal;
  const { isFavorite, addFavorite, removeFavorite } = useFavorites();
  const fav = isFavorite(idMeal);

  return (
    <div className="card">
      <Link to={`/recipe/${idMeal}`}>
        <img src={strMealThumb} alt={strMeal} />
      </Link>
      <div className="card-body">
        <h3>{strMeal}</h3>
        <button onClick={() => (fav ? removeFavorite(idMeal) : addFavorite(idMeal))}>
          {fav ? '★ Remove' : '☆ Add'}
        </button>
      </div>
    </div>
  );
}
