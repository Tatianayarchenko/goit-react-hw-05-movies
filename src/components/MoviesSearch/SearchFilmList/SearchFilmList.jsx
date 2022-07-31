import { FilmLink } from './SearchFilmsList.styled';
import PropTypes from 'prop-types';

export const SearchFilmsList = ({ films, url, location }) => (
  <ul>
    {films.map(film => (
      <FilmLink
        key={film.id}
        to={`${url}${film.id}`}
        state={{ from: location }}
      >
        {film.title}
      </FilmLink>
    ))}
  </ul>
);

SearchFilmsList.propTypes = {
  films: PropTypes.array.isRequired,
  url: PropTypes.string,
  location: PropTypes.object.isRequired,
};
