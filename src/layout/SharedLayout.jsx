import { Header } from 'layout/Header/Header';
import { Container } from './SharedLayout.styled';

import { Outlet } from 'react-router-dom';

export const SharedLayout = () => {
  return (
    <>
      <Header />
      <Container>
        <Outlet />
      </Container>
    </>
  );
};
