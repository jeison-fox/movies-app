import { render } from '@testing-library/react';
import { Router } from 'wouter';
import App from '@/App';

export const mockMovies = {
  page: 1,
  results: Array(20)
    .fill(null)
    .map((_, index) => ({
      id: index + 1,
      original_title: `Movie ${index + 1}`,
      overview: `Overview for Movie ${index + 1}`,
      poster_path: `/poster-path-${index + 1}.jpg`,
      release_date: '2023-01-01',
      vote_average: 7.5,
    })),
  total_pages: 10,
  total_results: 200,
};

export const mockMovieDetail = {
  id: 1,
  original_title: 'Movie 1',
  overview: 'Overview for Movie 1',
  poster_path: '/poster-path-1.jpg',
  release_date: '2023-01-01',
  vote_average: 7.5,
  runtime: 120,
};

export function renderWithRouter(initialLocation = '/') {
  let mockLocation = initialLocation;

  return {
    ...render(
      <Router
        hook={() => [
          mockLocation,
          newLocation => {
            mockLocation = newLocation;
          },
        ]}
      >
        <App />
      </Router>,
    ),
    getMockLocation: () => mockLocation,
  };
}
