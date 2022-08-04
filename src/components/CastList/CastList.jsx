import defaultImage from 'images/default-profile.jpg';

export const CastList = ({ casts }) => {
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
