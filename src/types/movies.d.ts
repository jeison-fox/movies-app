export interface Movie {
  id: number;
  original_title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
}

export interface MovieDetail extends Movie {
  runtime: number;
}

export interface MovieDiscoveryResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}
