import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import Routes from './routes';

// REDUX
import store from './state/configureStore';
import history from './routes/history';

const App = () => (
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<main className="main-content">
				<Routes />
			</main>
		</ConnectedRouter>
	</Provider>
);

export default App;
