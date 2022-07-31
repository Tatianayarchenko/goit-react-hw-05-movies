import { FilmLink } from './SearchFilmsList.styled';

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
