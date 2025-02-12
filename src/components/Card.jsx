import { ChevronDownIcon } from "@heroicons/react/16/solid";
import { useState } from "react";
import { useMovies } from "../store/movies-context";

const Card = () => {
  const { movies, loading } = useMovies();
  const [expandedMovies, setExpandedMovies] = useState({});

  const toggleOverview = (id) => {
    setExpandedMovies((prevState) => ({
      ...prevState,
      [id]: {
        isExpanded: !prevState[id]?.isExpanded,
      },
    }));
  };

  return (
    <>
      {loading && (
        <div className="place-self-center flex items-center justify-between">
          <div className="animate-spin rounded-full h-4 w-4 border-2 border-blue-500 border-t-transparent"></div>
          <p className="text-lg font-semibold">Loading...</p>
        </div>
      )}
      {movies.map((movie) => (
        <div key={movie.original_title} className="group">
          <img
            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            class="w-full h-auto rounded-lg bg-gray-200 object-cover"
          />
          <div className="mt-4 flex items-center justify-between">
            <h3 class="text-md text-gray-700">{movie.original_title}</h3>
            <button onClick={() => toggleOverview(movie.id)}>
              <ChevronDownIcon
                className={`w-8 h-8 text-red-700 cursor-pointer hover:text-red-900" transition-transfor duration-300 ${
                  expandedMovies[movie.id]?.isExpanded
                    ? "rotate-180"
                    : "rotate-0"
                }`}
              />
            </button>
          </div>
          <p class="mt-1 text-md font-medium text-gray-900">
            {expandedMovies[movie.id]?.isExpanded
              ? movie.overview
              : `${movie.overview.slice(0, 100)}...`}
          </p>
        </div>
      ))}
    </>
  );
};

export default Card;
