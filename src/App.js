import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import Routes from './routes';
import Header from './shared/components/Header';

// REDUX
import store from './store';
import history from './routes/history';

const App = () => (
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<Header />
			<main>
				<Routes />
			</main>
		</ConnectedRouter>
	</Provider>
);

export default App;
