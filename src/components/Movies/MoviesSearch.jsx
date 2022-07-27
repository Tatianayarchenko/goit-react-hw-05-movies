import * as API from 'api/api';
import { SearchFilmsList } from 'components/SearchFilmList/SearchFilmList';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { useEffect, useState } from 'react';

export const MoviesSearch = () => {
  const [query, setQuery] = useState('');
  const [searchFilms, setSearchFilms] = useState([]);

  useEffect(() => {
    try {
      if (query === '') {
        return;
      }
      async function fetchSearcFilms() {
        const data = await API.searchMovies(query);
        setSearchFilms(data);
        // console.log(data);
      }
      fetchSearcFilms();
    } catch (error) {
      console.log(error);
    }
  }, [query]);

  const handleSubmit = query => {
    setQuery(query);
  };

  return (
    <>
      <SearchForm onSubmit={handleSubmit} />
      {searchFilms && <SearchFilmsList films={searchFilms} />}
    </>
  );
};
