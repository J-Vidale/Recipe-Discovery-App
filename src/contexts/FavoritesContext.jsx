import { createContext, useContext, useCallback } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useLocalStorage('favorites', []);

  const addFavorite = useCallback(
    (id) => {
      if (!favorites.includes(id)) {
        setFavorites([...favorites, id]);
      }
    },
    [favorites, setFavorites]
  );

  const removeFavorite = useCallback(
    (id) => {
      setFavorites(favorites.filter((fid) => fid !== id));
    },
    [favorites, setFavorites]
  );

  const isFavorite = useCallback(
    (id) => favorites.includes(id),
    [favorites]
  );

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, removeFavorite, isFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  return useContext(FavoritesContext);
}
