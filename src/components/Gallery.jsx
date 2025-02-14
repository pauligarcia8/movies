import { useEffect } from "react";
import { useMovies } from "../store/movies-context";
import MovieList from "./MovieList";
import Error from "./Error";
import Loader from "./Loader";

const Gallery = ({ category }) => {
  const { movieList, favorites, errorMessage, loading, setCategories } = useMovies();

  const moviesToShow = category === "favorites" ? favorites : movieList;

  useEffect(() => {
    setCategories(category);
  }, []);

  return (
    <>
      {loading && <Loader />}
      {!loading && errorMessage !== null && <Error errorMessage={errorMessage} />}
      {!loading && errorMessage === null && <MovieList movies={moviesToShow} />}
    </>
  );
};

export default Gallery;
