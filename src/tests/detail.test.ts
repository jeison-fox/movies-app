import { describe, test, expect, beforeEach, vi } from 'vitest';
import { screen, fireEvent } from '@testing-library/react';
import { mockMovieDetail, renderWithRouter } from '@tests/utils/setup';
import * as tmdbApi from '@api/tmdb';

vi.mock('@api/tmdb', () => {
  return {
    fetchMovieDetails: vi.fn(),
  };
});

describe('Detail Page Tests', () => {
  beforeEach(() => {
    vi.resetAllMocks();
    vi.mocked(tmdbApi.fetchMovieDetails).mockResolvedValue(mockMovieDetail);
  });

  test('DetailView renders correctly with movie title', async () => {
    renderWithRouter('/movie/1');

    expect(await screen.findByTestId('detail-view')).toBeInTheDocument();

    const movieTitle = await screen.findByTestId('detail-movie-title');
    expect(movieTitle).toBeInTheDocument();
    expect(movieTitle.textContent).toBe('Movie 1');

    expect(screen.getByTestId('detail-movie-poster')).toBeInTheDocument();
    expect(screen.getByTestId('detail-movie-year')).toBeInTheDocument();
    expect(screen.getByTestId('detail-movie-score')).toBeInTheDocument();
    expect(screen.getByTestId('detail-movie-synopsis')).toBeInTheDocument();
  });

  test('Clicking on back button navigates back to home page', async () => {
    const { getMockLocation } = renderWithRouter('/movie/1');

    await screen.findByTestId('detail-view');

    const backButton = await screen.findByTestId('back-button');
    fireEvent.click(backButton);

    expect(getMockLocation()).toBe('/');
  });
});
