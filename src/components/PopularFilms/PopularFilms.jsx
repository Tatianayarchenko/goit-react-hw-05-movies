export const PopularFilms = ({ films }) => (
  <ul>
    {films.map(film => (
      <li key={film.id}>{film.title}</li>
    ))}
  </ul>
);

// import { ImageGalleryItem } from './ImageGalleryItem';

// export const ImageGallery = ({ items, setImageModal, onClick }) => (
//   <ImageGalleryList>
//     {items.map(item => (
//       <ImageGalleryItem
//         key={item.id}
//         src={item}
//         onClick={() => {
//           setImageModal(item.largeImageURL);
//           onClick();
//         }}
//       />
//     ))}
//   </ImageGalleryList>
// );
