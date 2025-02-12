import { createContext, useContext, useEffect, useState } from "react";

export const MoviesContext = createContext({
  movies: [],
  loading: true
});

export default function MoviesProvider({ children }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYzJiYTMxODliMzMxZWM5M2JkNGY2ZDNjODA3NTY4NSIsIm5iZiI6MTY0MzU3OTYxOS4xNjk5OTk4LCJzdWIiOiI2MWY3MDhlMzU5ZThhOTAwOTI1MTZiZDgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.pmgrCZ0zpZXEdZH48ibrAw7xg_R4xuvDvmXDnOAsoBA",
    },
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
        const fetchMovies = async () => {
          try {
            const response = await fetch(
              "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
              options
            );
            const movies = await response.json();
            if (response.ok) {
              setMovies(movies.results);
              setLoading(false);
            }
          } catch (error) {
            console.log("ERROR");
          }
        };
        fetchMovies();
    }, 3000)
  }, []);

  return (
    <MoviesContext.Provider value={{ movies, loading }}>
      {children}
    </MoviesContext.Provider>
  );
}

export const useMovies = () => {
    return useContext(MoviesContext);
}