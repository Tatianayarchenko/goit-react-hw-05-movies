import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderStyled = styled.header`
  font-size: 1.5em;
  padding-right: 20px;
  padding-left: 20px;
  width: 100%;
  background-color: antiquewhite;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const StyledLink = styled(NavLink)`
  text-align: center;
  border-radius: 4px;
  display: inline-flex;
  justify-content: center;
  width: 100px;
  padding-top: 5px;
  padding-bottom: 5px;
  color: #000000;
  text-decoration: none;

  &:not(:last-child) {
    margin-right: 20px;
  }

  &.active {
    color: #89495e;
    background-color: #ab9da1;
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: #89495e;
    text-decoration: underline;
  }
`;
