import { describe, test, expect, beforeEach, vi } from 'vitest';
import { screen, fireEvent } from '@testing-library/react';
import { mockMovies, renderWithRouter } from '@tests/utils/setup';
import * as tmdbApi from '@api/tmdb';

vi.mock('@api/tmdb', () => {
  return {
    fetchPopularMovies: vi.fn(),
  };
});

describe('Home Page Tests', () => {
  beforeEach(() => {
    vi.resetAllMocks();
    vi.mocked(tmdbApi.fetchPopularMovies).mockResolvedValue(mockMovies);
  });

  test('HomeView renders correctly with 20 poster cards', async () => {
    renderWithRouter();

    expect(await screen.findByTestId('home-view')).toBeInTheDocument();

    const posterCards = await screen.findAllByTestId('poster-card');
    expect(posterCards).toHaveLength(20);
  });

  test('Clicking on a poster card navigates to the movie detail page', async () => {
    const { getMockLocation } = renderWithRouter();

    const posterCards = await screen.findAllByTestId('poster-card');
    fireEvent.click(posterCards[0]);

    expect(getMockLocation()).toBe('/movie/1');
  });
});
