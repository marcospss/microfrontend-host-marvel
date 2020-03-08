import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../containers/Home';

const Routes = () => (
	<Switch>
		<Route exact path="/" component={ Home } />
	</Switch>
);

export default Routes;
