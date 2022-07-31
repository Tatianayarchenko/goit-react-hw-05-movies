import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from 'api/api';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import defaultImage from 'components/defaultImage/default-profile.jpg';

const Cast = () => {
  const { movieId } = useParams();
  const [casts, setCasts] = useState(null);

  useEffect(() => {
    try {
      async function getMovieCast() {
        const data = await getCast(movieId);
        setCasts(data);
      }
      getMovieCast();
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    }
  }, [movieId]);

  if (!casts) {
    return null;
  }

  if (casts.length === 0) {
    return <p>We don't have any casts for this movie.</p>;
  }

  return (
    <div>
      <ul>
        {casts.slice(0, 20).map(({ id, profile_path, name, character }) => {
          const image = profile_path
            ? `https://image.tmdb.org/t/p/w500${profile_path}`
            : defaultImage;

          return (
            <li key={id}>
              <img src={image} alt="name" width="60" />
              <p>{name}</p>
              <p>Character: {character}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Cast;
