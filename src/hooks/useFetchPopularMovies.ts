import { useEffect, useState } from 'react';
import { fetchPopularMovies } from '@api/tmdb';
import type { Movie } from '@customTypes/movies';

const useFetchPopularMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await fetchPopularMovies();
        setMovies(data.results);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return { movies, loading, error };
};

export default useFetchPopularMovies;
