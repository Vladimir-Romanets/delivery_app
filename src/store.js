import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';

import sagas from './sagas/index';
import createRootReducer from './reducers';

export const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();

const composedMiddlewares = 
	applyMiddleware(
		sagaMiddleware,
		routerMiddleware(history)
	)

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	createRootReducer(history),
	composeEnhancer(composedMiddlewares),
);

sagaMiddleware.run(sagas);

export default store