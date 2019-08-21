import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';

import sagas from './sagas/index';
import reducers from './reducers/index';

export const history = createHistory();

const sagaMiddleware = createSagaMiddleware();
const historyMiddleware = routerMiddleware(history);

export const store = createStore(
	reducers,
	(process.env.NODE_ENV !== "production") &&  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
	applyMiddleware(
		sagaMiddleware,
		historyMiddleware
	)
);

sagaMiddleware.run(sagas);