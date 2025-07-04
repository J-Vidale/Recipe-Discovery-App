import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { getByCategory } from '../api/mealdb';
import Spinner from '../components/Spinner';
import ErrorMessage from '../components/ErrorMessage';
import RecipeCard from '../components/RecipeCard';

export default function CategoryPage() {
  const { categoryName } = useParams();
  const { data: meals, loading, error } = useFetch(getByCategory, categoryName);

  if (loading) return <Spinner />;
  if (error) return <ErrorMessage error={error} />;

  return (
    <>
      <h2>{categoryName}</h2>
      <div className="grid">
        {meals.map((m) => (
          <RecipeCard key={m.idMeal} meal={m} />
        ))}
      </div>
    </>
  );
}
