import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../containers/Home';
import Details from '../containers/Details';
import PageNotFound from '../containers/PageNotFound';

const Routes = () => (
  <BrowserRouter basename="marvel">
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/details/:characterId' component={Details} />
      <Route component={PageNotFound} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
