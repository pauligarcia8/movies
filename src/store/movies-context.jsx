import { createContext, useContext, useEffect, useState } from "react";

export const MoviesContext = createContext({
  movies: [],
  favorites: [],
  loading: true,
  setCategories: () => {},
  toggleFavorite: () => {},
});

export default function MoviesProvider({ children }) {
  const [movieList, setMoviesList] = useState([]);
  const [category, setCategories] = useState("popular");
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_KEY = "fc2ba3189b331ec93bd4f6d3c8075685";
  const BASE_URL = "https://api.themoviedb.org/3";
  const ACCOUNT_ID = 11852954;
  const ACCESS_TOKEN =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYzJiYTMxODliMzMxZWM5M2JkNGY2ZDNjODA3NTY4NSIsIm5iZiI6MTY0MzU3OTYxOS4xNjk5OTk4LCJzdWIiOiI2MWY3MDhlMzU5ZThhOTAwOTI1MTZiZDgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.pmgrCZ0zpZXEdZH48ibrAw7xg_R4xuvDvmXDnOAsoBA";

  const fetchMovies = async (selectedCategory) => {
    try {
      setLoading(true);
      let url;

      if (selectedCategory === "favorites") {
        url = `${BASE_URL}/account/${ACCOUNT_ID}/favorite/movies?language=en-US&page=1`;
      } else {
        url = `${BASE_URL}/movie/${selectedCategory}?api_key=${API_KEY}&language=en-US&page=1`;
      }

      const response = await fetch(url, {
        headers: {
          "Authorization": `Bearer ${ACCESS_TOKEN}`,
          "Content-Type": "application/json",
        },
      });
      const movies = await response.json();

      if (response.ok) {
        if (selectedCategory === "favorites") {
          setFavorites(movies.results || []);
        } else {
          setMoviesList(movies.results || []);
        }
      }
    } catch (error) {
      console.error("ERROR", error);
    } finally {
      setLoading(false);
    }
  };

  const toggleFavorite = async (movie) => {
    try {
      const isFavorite = favorites.some((fav) => fav.id === movie.id);

      const response = await fetch(
        `${BASE_URL}/account/${ACCOUNT_ID}/favorite`,
        {
          method: "POST",
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Bearer ${ACCESS_TOKEN}`,
          },
          body: JSON.stringify({
            media_type: "movie",
            media_id: movie.id,
            favorite: !isFavorite,
          }),
        }
      );

      const data = await response.json();

      if (data.success) {
        setFavorites(
          (prevFavorites) =>
            isFavorite
              ? prevFavorites.filter((fav) => fav.id !== movie.id) 
              : [...prevFavorites, movie] 
        );
      } else {
        throw new Error(data.status_message || "Error al actualizar favoritos");
      }
    } catch (error) {
      console.error("ERROR", error);
    }
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      fetchMovies(category);
    }, 3000);
  }, [category]);

  return (
    <MoviesContext.Provider
      value={{ movieList, favorites, loading, setCategories, toggleFavorite }}
    >
      {children}
    </MoviesContext.Provider>
  );
}

export const useMovies = () => {
  return useContext(MoviesContext);
};
