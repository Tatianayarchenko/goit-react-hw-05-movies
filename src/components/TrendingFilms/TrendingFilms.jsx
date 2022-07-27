import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const TrendingFilmLink = styled(NavLink)`
  display: block;
`;

export const TrendingFilms = ({ films }) => (
  <ul>
    {films.map(film => (
      <TrendingFilmLink to={`/movies/${film.id}`} key={film.id}>
        {film.title}
      </TrendingFilmLink>
    ))}
  </ul>
);
