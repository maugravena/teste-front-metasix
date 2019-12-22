import React from 'react';
import styled from 'styled-components';
import { useRouteMatch, Switch, Route } from 'react-router-dom';
import DashboadWrapper from '../../components/DashboardWrapper';
import HeaderDashboard from '../../components/HeaderDashboad';
import NavbarDashboard from '../../components/NavbarDashboard';
import Empty from '../Empty';
import FAQ from '../FAQ';

const Main = styled.main`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-top: 30px;
  padding: 0 25px;

  @media (min-width: 768px) {
    margin-top: 50px;
    padding: 0 50px;
  }
`;

function Dashboad() {
  const { path } = useRouteMatch();

  return (
    <DashboadWrapper>
      <HeaderDashboard />
      <Main>
        <NavbarDashboard />
        <Switch>
          <Route path={`${path}/faq`} component={FAQ} />
          <Route component={Empty} />
        </Switch>
      </Main>
    </DashboadWrapper>
  );
}

export default Dashboad;
