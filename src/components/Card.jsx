import { useMovies } from "../store/movies-context";

const Card = () => {
  const { movies, loading } = useMovies();

  return (
    <>
      {loading && (
        <div className="place-self-center flex items-center justify-between">
          <div className="animate-spin rounded-full h-4 w-4 border-2 border-blue-500 border-t-transparent"></div>
          <p className="text-lg font-semibold">Loading...</p>
        </div>
      )}
      {movies.map((movie) => (
        <a href="" className="group" key={movie.original_title}>
          <img
            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            class="w-full h-auto rounded-lg bg-gray-200 object-cover group-hover:opacity-75"
          />
          <h3 class="mt-4 text-sm text-gray-700">{movie.original_title}</h3>
          <p class="mt-1 text-lg font-medium text-gray-900">{movie.overview}</p>
        </a>
      ))}
    </>
  );
};

export default Card;
