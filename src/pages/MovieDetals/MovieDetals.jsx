import { useParams } from 'react-router-dom';
import { getMovieById } from 'api/api';
import { useEffect } from 'react';
import { useState } from 'react';

export const MovieDetals = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    try {
      async function getMovieDetals() {
        const data = await getMovieById(movieId);
        setMovie(data);
        console.log(data);
      }
      getMovieDetals();
    } catch (error) {
      console.log(error);
    }
  }, [movieId]);

  if (movie === null) {
    return;
  }

  const { title, vote_average, overview, genres, poster_path } = movie;

  const imageUrlPath = `https://image.tmdb.org/t/p/w500${poster_path}`;

  return (
    <div>
      <div>
        <h1>{title}</h1>
        <img src={imageUrlPath} alt="title" width="240" />
        <p>
          <b>User Score</b> {vote_average * 10}%
        </p>
        <p>
          <b>Overview</b> {overview}
        </p>

        <b> Genres </b>
        <ul>
          {genres.map(genre => (
            <li key={genre.id}>{genre.name}</li>
          ))}
        </ul>
        <h2>Additional information</h2>
        <ul>
          <li>Cast</li>
          <li>Reviews</li>
        </ul>
      </div>
    </div>
  );
};
