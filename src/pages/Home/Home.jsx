import { getTrendingMovies } from 'api/fetchApi';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { PrimaryTitle } from 'components/Titles/PrimaryTitle.styled';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const [films, setFilms] = useState([]);
  const location = useLocation();

  useEffect(() => {
    try {
      async function fetchImages() {
        const data = await getTrendingMovies();
        setFilms(data);
      }
      fetchImages();
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    }
  }, []);

  return (
    <>
      <PrimaryTitle>Trending movies</PrimaryTitle>
      <MoviesList films={films} location={location} />
    </>
  );
};

export default Home;
