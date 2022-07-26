import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';

const Header = styled.header`
  font-size: 1.5em;
  text-align: center;
  color: red;
  background-color: antiquewhite;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const List = styled.ul`
  list-style: none;
`;

const Item = styled.li`
  font-size: 1.2em;
  text-align: center;
  color: #000000;
`;

const StyledLink = styled(NavLink)`
  font-size: 1.2em;
  text-align: center;
  color: #000000;
  margin-right: 20px;
`;

export const Home = () => {
  return (
    <div>
      <Header>
        <nav>
          <StyledLink to="/">HOME</StyledLink>
          <Link to="/movies">MOVIES</Link>
        </nav>
      </Header>
      <Title>Trending movies</Title>
      <List>
        <Item>Film 1</Item>
        <Item>Film 2</Item>
        <Item>Film 3</Item>
      </List>
    </div>
  );
};
