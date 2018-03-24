import React from 'react';
import {
  BrowserRouter,
} from 'react-router-dom';

import {
  Route,
  Switch
} from 'react-router';

import Home from './pages/Home';

const Router = props => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={`/`} component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;