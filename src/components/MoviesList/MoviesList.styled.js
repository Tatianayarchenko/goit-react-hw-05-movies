import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const FilmLink = styled(NavLink)`
  display: block;
  color: #000000;
  text-decoration: none;
  :hover {
    color: #bf2155;
    text-decoration: underline;
  }
`;

export const FilmList = styled.ul`
  padding: 0;
`;
