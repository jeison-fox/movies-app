import { useEffect, useState } from 'react';
import { fetchMovieDetails } from '@api/tmdb';
import type { MovieDetail } from '@customTypes/movies';

const useFetchMovieDetails = (id: string) => {
  const [movie, setMovie] = useState<MovieDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const data = await fetchMovieDetails(id);
        setMovie(data);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchDetails();
  }, [id]);

  return { movie, loading, error };
};

export default useFetchMovieDetails;
