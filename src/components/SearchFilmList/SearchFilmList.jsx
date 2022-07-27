import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const FilmLink = styled(NavLink)`
  display: block;
`;

export const SearchFilmsList = ({ films }) => (
  <ul>
    {films.map(film => (
      <FilmLink to={`${film.id}`} key={film.id}>
        {film.title}
      </FilmLink>
    ))}
  </ul>
);
