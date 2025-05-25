import PosterCard from '@components/PosterCard';
import type { HomeViewProps } from '@customTypes/components/homeView';

const HomeView: React.FC<HomeViewProps> = ({ movies }) => {
  return (
    <main className="movie-grid" data-testid="home-view">
      {movies.map(movie => (
        <PosterCard key={movie.id} id={movie.id} imagePath={movie.poster_path} title={movie.original_title} />
      ))}
    </main>
  );
};

export default HomeView;
