import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import { store, history } from './store';
import { ConnectedRouter } from 'react-router-redux';

render(
	<Provider store = { store }>
		<ConnectedRouter history = { history } >
			<App />
		</ConnectedRouter>
	</Provider>,
	document.getElementById('app')
);
