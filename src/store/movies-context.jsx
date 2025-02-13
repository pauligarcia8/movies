import { createContext, useContext, useEffect, useState } from "react";

export const MoviesContext = createContext({
  movies: [],
  loading: true,
  setCategories: () => {},
});

export default function MoviesProvider({ children }) {
  const [movieList, setMoviesList] = useState([]);
  const [category, setCategories] = useState("popular");
  const [loading, setLoading] = useState(true);

  const API_KEY = "fc2ba3189b331ec93bd4f6d3c8075685";
  const BASE_URL = "https://api.themoviedb.org/3";

  const fetchMovies = async (selectedCategory) => {
    try {
      const response = await fetch(
        `${BASE_URL}/movie/${selectedCategory}?api_key=${API_KEY}&language=en-US&page=`
      );
      const movies = await response.json();
      if (response.ok) {
        setMoviesList(movies.results);
        setLoading(false);
      }
    } catch (error) {
      console.log("ERROR");
    }
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      fetchMovies(category);
    }, 3000);
  }, [category]);

  return (
    <MoviesContext.Provider value={{ movieList, loading, setCategories }}>
      {children}
    </MoviesContext.Provider>
  );
}

export const useMovies = () => {
  return useContext(MoviesContext);
};
