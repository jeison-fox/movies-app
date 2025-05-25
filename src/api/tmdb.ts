import type { MovieDiscoveryResponse, MovieDetail } from '@customTypes/movies';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
  },
};

async function fetchFromTMDB<T>(endpoint: string): Promise<T> {
  const response = await fetch(`${BASE_URL}${endpoint}&api_key=${API_KEY}`, options);

  if (!response.ok) {
    throw new Error(`Error fetching data from TMDB: ${response.statusText}`);
  }

  return response.json();
}

export async function fetchPopularMovies() {
  const endpoint = '/movie/popular?language=en-US&page=1';
  return fetchFromTMDB<MovieDiscoveryResponse>(endpoint);
}

export async function fetchMovieDetails(movieId: string) {
  const endpoint = `/movie/${movieId}?language=en-US`;
  return fetchFromTMDB<MovieDetail>(endpoint);
}
