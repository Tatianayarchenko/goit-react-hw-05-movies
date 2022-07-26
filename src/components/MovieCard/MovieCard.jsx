import defaultImage from 'images/default-profile.jpg';
import { CardInfo, CardWrap } from './MovieCard.styled';
import PropTypes from 'prop-types';
import { SecondaryTitle } from 'components/Titles/SecondaryTitle.styled';

export const MovieCard = ({ movie }) => {
  const { title, vote_average, overview, genres, poster_path } = movie;

  const imageUrlPath = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : defaultImage;

  return (
    <div>
      <CardWrap>
        <img src={imageUrlPath} alt="title" width="240" />
        <CardInfo>
          <SecondaryTitle>{title}</SecondaryTitle>
          <p>
            <b>User Score</b> {Math.round(vote_average * 10)}%
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
        </CardInfo>
      </CardWrap>
    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
};
