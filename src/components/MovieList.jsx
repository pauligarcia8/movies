import { useContext, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import { MoviesContext } from "../store/movies-context";

const MovieList = ({ movies }) => {
  const [expandedMovies, setExpandedMovies] = useState({});
  const { favorites, toggleFavorite } = useContext(MoviesContext);

  const toggleOverview = (id) => {
    setExpandedMovies((prevState) => ({
      ...prevState,
      [id]: {
        isExpanded: !prevState[id]?.isExpanded,
      },
    }));
  };

  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8">
        {movies.map((movie) => (
          <div key={movie.original_title} className="group">
            <img
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              className="w-full h-auto rounded-lg bg-gray-200 object-cover"
            />
            <button onClick={() => toggleFavorite(movie)}>
              {favorites.some((fav) => fav.id === movie.id) ? "❤️" : "🤍"}
            </button>
            <div className="mt-4 flex items-center justify-between">
              <h3 className="text-md text-gray-700">{movie.original_title}</h3>
              <button onClick={() => toggleOverview(movie.id, true)}>
                <ChevronDownIcon
                  className={`w-8 h-8 text-red-700 cursor-pointer hover:text-red-900" transition-transfor duration-300 ${
                    expandedMovies[movie.id]?.isExpanded
                      ? "rotate-180"
                      : "rotate-0"
                  }`}
                />
              </button>
            </div>
            <p className="mt-1 text-md font-medium text-gray-900">
              {expandedMovies[movie.id]?.isExpanded
                ? movie.overview
                : `${movie.overview.slice(0, 100)}...`}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
