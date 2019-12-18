import React from 'react';
import { Switch, Route } from 'react-router-dom';
import DashboadWrapper from '../../components/DashboardWrapper';

function Dashboad() {
  return (
    <DashboadWrapper>
      <Switch>
        <Route path={`${'url'}/`} />
      </Switch>
    </DashboadWrapper>
  );
}

export default Dashboad;
