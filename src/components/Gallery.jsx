import { useEffect } from "react";
import { useMovies } from "../store/movies-context";
import MovieList from "./MovieList";

const Gallery = ({ category }) => {
  const { movieList, favorites, loading, setCategories } = useMovies();

  const moviesToShow = category === "favorites" ? favorites : movieList;

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
      {!loading && <MovieList movies={moviesToShow} />}
    </>
  );
};

export default Gallery;
