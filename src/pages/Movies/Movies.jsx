import { Loading } from 'components/Loader/Loader';
import { Suspense } from 'react';
import { useEffect, useState } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { searchMovies } from 'api/api';
import { SearchFilmsList } from 'components/MoviesSearch/SearchFilmList/SearchFilmList';
import { SearchForm } from 'components/MoviesSearch/SearchForm/SearchForm';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchFilms, setSearchFilms] = useState([]);
  const query = searchParams.get('query') ?? '';
  const location = useLocation();

  useEffect(() => {
    try {
      if (query === '') {
        return;
      }
      async function fetchSearcFilms() {
        const data = await searchMovies(query);
        setSearchFilms(data);
        if (data.length === 0) {
          return toast.error(
            'Sorry, there are no movies matching your search query. Please try again.'
          );
        }
      }
      fetchSearcFilms();
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    }
  }, [query]);

  const handleSubmit = query => {
    setSearchParams(query !== '' ? { query: query } : {});
  };

  return (
    <>
      <SearchForm onSubmit={handleSubmit} />
      <Suspense fallback={<Loading />}>
        {searchFilms && (
          <SearchFilmsList films={searchFilms} url="" location={location} />
        )}
      </Suspense>
    </>
  );
};

export default Movies;