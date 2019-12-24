import React from 'react';
import styled from 'styled-components';
import { useRouteMatch, Switch, Route } from 'react-router-dom';
import HeaderDashboard from '../../components/HeaderDashboad';
import NavbarDashboard from '../../components/NavbarDashboard';
import Empty from '../Empty';
import FAQ from '../FAQ';

const Wrapper = styled.main`
  background-color: #fafafa;
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0 25px;

  @media (min-width: 768px) {
    margin-top: 30px;
    padding: 0 50px;
  }
`;

function Dashboad() {
  const { path } = useRouteMatch();

  return (
    <Wrapper>
      <HeaderDashboard />
      <Section>
        <NavbarDashboard />
        <Switch>
          <Route path={`${path}/faq`} component={FAQ} />
          <Route component={Empty} />
        </Switch>
      </Section>
    </Wrapper>
  );
}

export default Dashboad;
