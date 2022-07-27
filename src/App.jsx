import { Routes, Route } from 'react-router-dom';
import { Layout } from 'components/Layout/Layout';
import { Movies } from 'pages/Movies/Movies';
import { Home } from 'pages/Home/Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MovieDetals } from 'pages/MovieDetals/MovieDetals';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="movies" element={<Movies />}>
            {/* <Route path=":movieId" element={<MovieDetals />} /> */}
          </Route>
          <Route path="movies/:movieId" element={<MovieDetals />} />
        </Route>
      </Routes>
      <ToastContainer autoClose={3000} />
    </>
  );
};

/* <Route path="movies/:moviesId" element={<MovieDetals />}></Route> */

// /trending/get-trending список самых популярных фильмов на сегодня для создания коллекции на главной странице.
// /search/search-movies поиск кинофильма по ключевому слову на странице фильмов.
// /movies/get-movie-details запрос полной информации о фильме для страницы кинофильма.
// /movies/get-movie-credits запрос информации о актёрском составе для страницы кинофильма.
// /movies/get-movie-reviews запрос обзоров для страницы кинофильма.

// '/' - компонент Home, домашняя страница со списком популярных кинофильмов.
// '/movies' - компонент Movies, страница поиска фильмов по ключевому слову.
// '/movies/:movieId' - компонент MovieDetails, страница с детальной информацией о кинофильме.
// /movies/:movieId/cast - компонент Cast, информация о актерском составе. Рендерится на странице MovieDetails.
// /movies/:movieId/reviews - компонент Reviews, информация об обзорах. Рендерится на странице MovieDetails.
