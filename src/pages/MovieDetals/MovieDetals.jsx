import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieById } from 'api/api';
import { useState, useEffect, Suspense } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Loading } from 'components/Loader/Loader';
import { MovieCard } from 'components/MovieCard/MovieCard';
import { Container, Title, AdditionalInfoLink } from './MovieDetals.styled';

const MovieDetals = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const backLink = location.state?.from ?? '/';

  useEffect(() => {
    try {
      async function getMovieDetals() {
        const data = await getMovieById(movieId);
        setMovie(data);
      }
      getMovieDetals();
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    }
  }, [movieId]);

  if (!movie) {
    return null;
  }

  return (
    <Container>
      <Link to={backLink}>Go back</Link>
      <MovieCard movie={movie} />

      <Title>Additional information</Title>
      <ul>
        <AdditionalInfoLink to="cast" state={{ from: location.state.from }}>
          Cast
        </AdditionalInfoLink>
        <AdditionalInfoLink to="reviews" state={{ from: location.state.from }}>
          Reviews
        </AdditionalInfoLink>
      </ul>

      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default MovieDetals;
