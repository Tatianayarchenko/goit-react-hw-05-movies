import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from 'api/api';

export const Cast = () => {
  const { movieId } = useParams();
  const [casts, setCasts] = useState(null);

  useEffect(() => {
    try {
      async function getMovieCast() {
        const data = await getCast(movieId);
        setCasts(data);
        // console.log(data);
      }
      getMovieCast();
    } catch (error) {
      console.log(error);
    }
  }, [movieId]);

  if (casts === null) {
    return;
  }

  return (
    <div>
      <ul>
        {casts.slice(0, 20).map(cast => (
          <li key={cast.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
              alt="cast.name"
              width="60"
            />
            <p>{cast.name}</p>
            <p>Character: {cast.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
