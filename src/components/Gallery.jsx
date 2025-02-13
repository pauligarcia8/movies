import { useEffect } from "react";
import { useMovies } from "../store/movies-context";
import MovieList from "./MovieList";

const Gallery = ({ category }) => {
  const { movieList, loading, setCategories } = useMovies();

  useEffect(() => {
    setCategories(category);
  }, []);

  return (
    <>
      {loading && (
        <div className="place-self-center flex items-center justify-between">
          <div className="animate-spin rounded-full h-4 w-4 border-2 border-blue-500 border-t-transparent"></div>
          <p className="text-lg font-semibold">Loading...</p>
        </div>
      )}
      {!loading && <MovieList movies={movieList} />}
    </>
  );
};

export default Gallery;
