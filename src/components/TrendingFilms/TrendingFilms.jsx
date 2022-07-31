import { useLocation } from 'react-router-dom';
import { TrendingFilmLink, TrendingFilmList } from './TrendingFilms.styled';

export const TrendingFilms = ({ films }) => {
  const location = useLocation();

  return (
    <TrendingFilmList>
      {films.map(film => (
        <TrendingFilmLink
          to={`/movies/${film.id}`}
          state={{ from: location }}
          key={film.id}
        >
          {film.title}
        </TrendingFilmLink>
      ))}
    </TrendingFilmList>
  );
};
