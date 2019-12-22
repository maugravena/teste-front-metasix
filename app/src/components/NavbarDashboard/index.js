import React from 'react';
import styled from 'styled-components';
import { NavLink, useRouteMatch } from 'react-router-dom';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;

  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`;

const activeClassName = 'active';

const Item = styled(NavLink).attrs(props => ({
  children: props.content,
  activeClassName
}))`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.25);
  color: #707070;
  font-size: 14px;
  font-weight: bold;
  padding: 6px 12px;
  text-decoration: none;
  text-transform: uppercase;

  &.${activeClassName} {
    background-color: #0168b4;
    color: #fff;
  }

  @media (min-width: 768px) {
    &:not(:last-child) {
      margin-right: 30px;
      width: 70px;
      text-align: center;
    }
  }
`;

function NavbarDashboard() {
  const { url } = useRouteMatch();

  return (
    <Nav>
      <Item to="/dashboard" exact content="Home" />
      <Item to={`${url}/faq`} content="FAQ" />
      <Item to={`${url}/locais`} content="Locais" />
      <Item to={`${url}/categorias`} content="Categorias" />
    </Nav>
  );
}

export default NavbarDashboard;
