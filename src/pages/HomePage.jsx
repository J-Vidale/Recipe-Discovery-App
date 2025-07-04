import useFetch from '../hooks/useFetch';
import { getCategories } from '../api/mealdb';
import { Link } from 'react-router-dom';
import Spinner from '../components/Spinner';
import ErrorMessage from '../components/ErrorMessage';

export default function HomePage() {
  const { data: cats, loading, error } = useFetch(getCategories);

  if (loading) return <Spinner />;
  if (error) return <ErrorMessage error={error} />;

  return (
    <div className="grid">
      {cats.map((c) => (
        <Link key={c.idCategory} to={`/category/${c.strCategory}`}>
          <div className="card">
            <img src={c.strCategoryThumb} alt={c.strCategory} />
            <div className="card-body">
              <h3>{c.strCategory}</h3>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
