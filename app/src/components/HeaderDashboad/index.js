import React from 'react';
import styled from 'styled-components';
import LogoBoavista from '../LogoBoavista';
import LogoutBoavista from '../LogoutBoavista';
import ModulesBoatista from '../ModulesBoavista';

const Wrapper = styled.header`
  align-items: center;
  background-color: #0168b4;
  display: flex;
  height: 105px;
  justify-content: space-between;
  padding: 0 25px;
  width: 100%;

  @media (min-width: 768px) {
    padding: 0 50px;
  }
`;

const Options = styled.div`
  & > * {
    margin: 0 4px;
  }

  @media (min-width: 768px) {
    display: flex;
    & > *:not(:last-child) {
      margin: 0 50px;
    }
  }
`;

function HeaderDashboad() {
  return (
    <Wrapper>
      <LogoBoavista smaller />
      <Options>
        <ModulesBoatista />
        <LogoutBoavista />
      </Options>
    </Wrapper>
  );
}

export default HeaderDashboad;
