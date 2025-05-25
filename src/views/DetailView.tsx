import PlayIcon from '@assets/icons/play.svg?react';
import type { DetailViewProps } from '@customTypes/components/detailView';

const DetailView: React.FC<DetailViewProps> = ({ movie }) => {
  const imagePath = `https://image.tmdb.org/t/p/w185/${movie.poster_path}`;
  const movieYear = new Date(movie.release_date).getFullYear();

  return (
    <div className="detail-view" data-testid="detail-view">
      <header>
        <h1 data-testid="detail-movie-title">{movie.original_title}</h1>
      </header>
      <section className="detail-view__top">
        <img src={imagePath} alt={movie.original_title} loading="lazy" data-testid="detail-movie-poster" />
        <div className="detail-view__info">
          <div>
            <h2 data-testid="detail-movie-year">{movieYear}</h2>
            <p>{movie.runtime} mins</p>
          </div>
          <div>
            <p className="detail-view__score" data-testid="detail-movie-score">
              {movie.vote_average.toFixed(1)} / 10
            </p>
            <button type="button">Add to Favorite</button>
          </div>
        </div>
      </section>
      <section className="detail-view__overview" data-testid="detail-movie-synopsis">
        {movie.overview}
      </section>
      <section className="detail-view__trailers">
        <h2>Trailers</h2>
        <hr />
        <button>
          <PlayIcon />
          <span>Play Trailer 1</span>
        </button>
        <button>
          <PlayIcon />
          <span>Play Trailer 2</span>
        </button>
      </section>
    </div>
  );
};

export default DetailView;
