import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from './layout/SharedLayout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NotFound } from 'pages/NotFound/NotFound';
import { Suspense } from 'react';
import { Loading } from 'components/Loader/Loader';

const Home = lazy(() => import('./pages/Home/Home'));
const Movies = lazy(() => import('./pages/Movies/Movies'));
const MovieDetals = lazy(() => import('./pages/MovieDetals/MovieDetals'));
const Cast = lazy(() => import('./pages/Casts/Casts'));
const Reviews = lazy(() => import('./pages/Reviews/Reviews'));

export const App = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="movies" element={<Movies />} />
            <Route path="movies/:movieId" element={<MovieDetals />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
      <ToastContainer autoClose={3000} />
    </>
  );
};
