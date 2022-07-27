import styled from 'styled-components';
import { getTrendingMovies } from 'api/api';
import { useState, useEffect } from 'react';
import { PopularFilms } from 'components/PopularFilms/PopularFilms';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

// Здесь должен идти запрос и рендериться список популярных фильмов

export const Home = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    try {
      async function fetchImages() {
        const data = await getTrendingMovies();
        setFilms(data);
        console.log(data);
      }
      fetchImages();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div>
      <Title>Trending movies</Title>
      <PopularFilms films={films} />
    </div>
  );
};
