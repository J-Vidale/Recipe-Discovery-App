import { useLocation } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { searchMeals } from '../api/mealdb';
import Spinner from '../components/Spinner';
import ErrorMessage from '../components/ErrorMessage';
import RecipeCard from '../components/RecipeCard';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function SearchResults() {
  const query = useQuery().get('query') || '';
  const { data: meals, loading, error } = useFetch(searchMeals, query);

  if (loading) return <Spinner />;
  if (error) return <ErrorMessage error={error} />;
  if (!meals) return <p>No results for “{query}.”</p>;

  return (
    <>
      <h2>Results for “{query}”</h2>
      <div className="grid">
        {meals.map((m) => (
          <RecipeCard key={m.idMeal} meal={m} />
        ))}
      </div>
    </>
  );
}
