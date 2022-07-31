import defaultImage from 'components/defaultImage/default-profile.jpg';

export const MovieCard = ({ movie }) => {
  const { title, vote_average, overview, genres, poster_path } = movie;

  const imageUrlPath = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : defaultImage;

  return (
    <div>
      <h1>{title}</h1>
      <img src={imageUrlPath} alt="title" width="240" />
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
    </div>
  );
};
