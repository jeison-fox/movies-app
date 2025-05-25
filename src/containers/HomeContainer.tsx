import ErrorMessage from '@components/ErrorMessage';
import HomeView from '@views/HomeView';
import Layout from '@components/Layout';
import LoadingIndicator from '@components/LoadingIndicator';
import useFetchPopularMovies from '@hooks/useFetchPopularMovies';

const HomeContainer: React.FC = () => {
  const { movies, loading, error } = useFetchPopularMovies();

  return (
    <Layout title="Pop Movies">
      {loading && <LoadingIndicator />}
      {error && <ErrorMessage message="We're having trouble loading the movies right now." />}
      {!loading && !error && <HomeView movies={movies} />}
    </Layout>
  );
};

export default HomeContainer;
