import { Link } from 'wouter';
import type { PosterCardProps } from '@customTypes/components/posterCard';

const PosterCard: React.FC<PosterCardProps> = ({ id, imagePath, title }) => {
  return (
    <Link className="poster-card" href={`/movie/${id}`} data-testid="poster-card">
      <img src={`https://image.tmdb.org/t/p/w185/${imagePath}`} alt={title} loading="lazy" />
    </Link>
  );
};

export default PosterCard;
