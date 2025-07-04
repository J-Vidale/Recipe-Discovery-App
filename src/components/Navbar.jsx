import { Link, useNavigate } from 'react-router-dom';
import SearchBar from './SearchBar';

export default function Navbar() {
  const nav = useNavigate();
  const onSearch = (q) => {
    nav(`/search?query=${encodeURIComponent(q)}`);
  };

  return (
    <nav>
      <div>
        <Link to="/">Home</Link>
        <Link to="/favorites">Favorites</Link>
      </div>
      <SearchBar onSearch={onSearch} />
    </nav>
  );
}
