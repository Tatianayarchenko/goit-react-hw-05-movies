import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieById } from 'api/api';
import { useState, useEffect, Suspense } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Loading } from 'components/Loader/Loader';
import { MovieCard } from 'components/MovieCard/MovieCard';
import { Container, Title } from './MovieDetals.styled';

const AdditionalInfoLink = styled(NavLink)`
  display: block;
`;

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
        <AdditionalInfoLink to="cast">Cast</AdditionalInfoLink>
        <AdditionalInfoLink to="reviews">Reviews</AdditionalInfoLink>
      </ul>

      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default MovieDetals;
