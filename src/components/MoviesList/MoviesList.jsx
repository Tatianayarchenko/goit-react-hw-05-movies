import { FilmLink, FilmList } from './MoviesList.styled';
import PropTypes from 'prop-types';

export const MoviesList = ({ films, location }) => (
  <FilmList>
    {films.map(film => (
      <FilmLink
        key={film.id}
        to={`/movies/${film.id}`}
        state={{ from: location }}
      >
        {film.title}
      </FilmLink>
    ))}
  </FilmList>
);

MoviesList.propTypes = {
  films: PropTypes.array.isRequired,
  location: PropTypes.object.isRequired,
};
