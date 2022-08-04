export const ReviewsList = ({ reviews }) => {
  return (
    <div>
      <ul>
        {reviews.map(({ id, author, content }) => (
          <li key={id}>
            <b>Author: {author}</b>
            <p>{content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
