import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Title = styled.h2`
  font-size: 24px;
  margin-top: 0;
  color: #89495e;
`;

export const Container = styled.div`
  padding: 30px;
`;

export const AdditionalInfoLink = styled(NavLink)`
  display: block;
`;
