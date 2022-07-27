import { MoviesSearch } from 'components/Movies/MoviesSearch';
import { Outlet } from 'react-router-dom';

export const Movies = () => {
  return (
    <>
      <MoviesSearch />
      <Outlet />
    </>
  );
};
