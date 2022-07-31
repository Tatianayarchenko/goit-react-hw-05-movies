import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const TrendingFilmList = styled.ul`
  padding: 0;
`;

export const TrendingFilmLink = styled(NavLink)`
  display: block;
  color: #000000;
  text-decoration: none;
  :hover {
    color: #bf2155;
    text-decoration: underline;
  }
`;
