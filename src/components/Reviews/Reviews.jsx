import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'api/api';

export const Reviews = () => {
  const { movieId } = useParams();
  const [reviewses, setReviewses] = useState(null);

  useEffect(() => {
    try {
      async function getMovieReviews() {
        const data = await getReviews(movieId);
        setReviewses(data);
        console.log(data);
      }
      getMovieReviews();
    } catch (error) {
      console.log(error);
    }
  }, [movieId]);

  if (reviewses === null) {
    return;
  }

  return (
    <div>
      <ul>
        {reviewses.map(reviews => (
          <li key={reviews.id}>
            <b>Author: {reviews.author}</b>
            <p>{reviews.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
