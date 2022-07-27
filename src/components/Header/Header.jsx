import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
// import { Home } from 'pages/Home/Home';

const HeaderStyled = styled.header`
  font-size: 1.5em;
  text-align: center;
  color: red;
  background-color: antiquewhite;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

const StyledLink = styled(NavLink)`
  /* font-size: 1.2em; */
  text-align: center;
  border-radius: 4px;
  display: inline-flex;
  justify-content: center;
  width: 100px;

  &:not(:last-child) {
    margin-right: 20px;
  }

  &.active {
    color: blue;
    background-color: #c0e0e1;
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: pink;
  }
`;

export const Header = () => {
  return (
    <>
      <HeaderStyled>
        <nav>
          <StyledLink to="/">HOME</StyledLink>
          <StyledLink to="/movies">MOVIES</StyledLink>
        </nav>
      </HeaderStyled>
      {/* <Home /> */}
    </>
  );
};
