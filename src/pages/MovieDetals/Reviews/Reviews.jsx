import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'api/fetchApi';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ReviewsList } from 'components/ReviewsList/ReviewsList';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    try {
      async function getMovieReviews() {
        const data = await getReviews(movieId);
        setReviews(data);
      }
      getMovieReviews();
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    }
  }, [movieId]);

  if (!reviews) {
    return null;
  }

  if (reviews.length === 0) {
    return <p>We don't have any reviews for this movie.</p>;
  }

  return <ReviewsList reviews={reviews} />;
};

export default Reviews;
