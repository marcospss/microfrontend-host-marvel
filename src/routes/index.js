import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../containers/Home';
import Details from '../containers/Details';
import PageNotFound from '../containers/PageNotFound';

const Routes = () => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/details/:mediaId' component={Details} />
    <Route component={PageNotFound} />
  </Switch>
);

export default Routes;
