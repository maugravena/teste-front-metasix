import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import Start from './pages/Start';
import Dashboard from './pages/Dashboard';

import './styles/reset.css';
import './styles/main.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Start} />
        <Route path="/dashboard" component={Dashboard} />
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
}

export default App;
