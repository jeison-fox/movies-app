import { useParams } from 'wouter';
import DetailView from '@views/DetailView';
import ErrorMessage from '@components/ErrorMessage';
import Layout from '@components/Layout';
import LoadingIndicator from '@components/LoadingIndicator';
import useFetchMovieDetails from '@hooks/useFetchMovieDetails';

const DetailContainer: React.FC = () => {
  const params = useParams();
  const { movie, loading, error } = useFetchMovieDetails(params.id as string);

  return (
    <Layout title="Movie details" showBackButton>
      {loading && <LoadingIndicator />}
      {error && <ErrorMessage message="We're having trouble loading the movie's details right now." />}
      {!loading && !error && movie && <DetailView movie={movie} />}
    </Layout>
  );
};

export default DetailContainer;
