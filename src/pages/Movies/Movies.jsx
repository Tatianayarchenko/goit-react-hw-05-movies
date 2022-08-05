import { Loading } from 'components/Loader/Loader';
import { Suspense } from 'react';
import { useEffect, useState } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { searchMovies } from 'api/fetchApi';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MoviesList } from 'components/MoviesList/MoviesList';

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
      <SearchForm value={query} onSubmit={handleSubmit} />
      <Suspense fallback={<Loading />}>
        {searchFilms && <MoviesList films={searchFilms} location={location} />}
      </Suspense>
    </>
  );
};

export default Movies;
