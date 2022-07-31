import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const FilmLink = styled(NavLink)`
  display: block;
`;

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
