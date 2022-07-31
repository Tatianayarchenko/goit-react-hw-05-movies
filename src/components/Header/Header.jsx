import { HeaderStyled, StyledLink } from './Header.styled';

export const Header = () => {
  return (
    <>
      <HeaderStyled>
        <nav>
          <StyledLink to="/">HOME</StyledLink>
          <StyledLink to="/movies">MOVIES</StyledLink>
        </nav>
      </HeaderStyled>
    </>
  );
};
