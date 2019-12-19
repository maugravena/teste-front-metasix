import React from 'react';
import { Switch, Route } from 'react-router-dom';
import DashboadWrapper from '../../components/DashboardWrapper';
import HeaderDashboard from '../../components/HeaderDashboad';

function Dashboad() {
  return (
    <DashboadWrapper>
      <HeaderDashboard />
      <Switch>
        <Route path={`${'url'}/`} />
      </Switch>
    </DashboadWrapper>
  );
}

export default Dashboad;
