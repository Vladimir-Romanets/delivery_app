import { put } from 'redux-saga/effects';
import { showLoading, hideLoading } from 'react-redux-loading-bar';

import { instance } from '../axios';
import * as actions from '../../actions';

function* clientsAdd({ data }){
	try {
		yield put( showLoading() );
		
		const { data: response } = yield instance('addNewClient', data);

		if ( response.status ){
			yield put( actions.clientsGetSuccess( response.list ) );
			yield put( actions.notifierSetSuccess({ message: 'Клиент успешно добавлен' }) );
		} else {
			throw new Error( response.message || 'Ошибка добавления записи' );
		};
	} catch (e) {
		yield put( actions.notifierSetError({ message: e.message }) );
	} finally {
		yield put( hideLoading() );
	};
};

export default clientsAdd;