import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from 'api/fetchApi';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CastList } from 'components/CastList/CastList';

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

  return <CastList casts={casts} />;
};

export default Cast;
