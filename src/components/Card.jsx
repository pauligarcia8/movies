import { useState, useEffect } from "react";

const Card = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYzJiYTMxODliMzMxZWM5M2JkNGY2ZDNjODA3NTY4NSIsIm5iZiI6MTY0MzU3OTYxOS4xNjk5OTk4LCJzdWIiOiI2MWY3MDhlMzU5ZThhOTAwOTI1MTZiZDgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.pmgrCZ0zpZXEdZH48ibrAw7xg_R4xuvDvmXDnOAsoBA'
    }
  };
  
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
        const movies = await response.json();
        if(response.ok) {
          
          setMovies(movies.results)
          setLoading(false)
        }
      } catch(error) {
        console.log('ERROR');
      }
    }
    fetchMovies();
    
  }, []);

  console.log('Data', movies);
    return (
        <>
        {movies.map((movie) => (
            <a href="" className="group">
            <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} class="w-full h-auto rounded-lg bg-gray-200 object-cover group-hover:opacity-75"></img>
            <h3 class="mt-4 text-sm text-gray-700">{movie.original_title}</h3>
            <p class="mt-1 text-lg font-medium text-gray-900">{movie.overview}</p>
        </a>
        ))}
        </>
    )
}

export default Card;