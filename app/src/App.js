import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Start from './pages/Start';

import './styles/reset.css';
import './styles/main.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Start} />
        <Redirect from="*" to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
