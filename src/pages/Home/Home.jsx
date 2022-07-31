import { getTrendingMovies } from 'api/api';
import { useState, useEffect, Suspense } from 'react';
import { TrendingFilms } from 'components/TrendingFilms/TrendingFilms';
import { toast } from 'react-toastify';
import { Loading } from 'components/Loader/Loader';
import { Container, Title } from './HomeStyled';

const Home = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    try {
      async function fetchImages() {
        const data = await getTrendingMovies();
        setFilms(data);
      }
      fetchImages();
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    }
  }, []);

  return (
    <Container>
      <Title>Trending movies</Title>
      <Suspense fallback={<Loading />}>
        <TrendingFilms films={films} />
      </Suspense>
    </Container>
  );
};

export default Home;
