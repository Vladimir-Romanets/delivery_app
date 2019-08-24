import { put } from 'redux-saga/effects';
import { showLoading, hideLoading } from 'react-redux-loading-bar';

import { instance } from '../axios';
import { clientsGetSuccess, notifierSetSuccess, notifierSetError } from '../../actions';

function* clientsAdd({ data }){
	try {
		yield put( showLoading() );
		
		const { data: response } = yield instance('addNewClient', data);

		if ( response.status ){
			yield put( clientsGetSuccess( response.list ) );
			yield put( notifierSetSuccess({ message: 'Клиент успешно добавлен' }) );
		} else {
			throw new Error( response.message || 'Ошибка добавления записи' );
		};
	} catch (e) {
		yield put( notifierSetError({ message: e.message }) );
	} finally {
		yield put( hideLoading() );
	};
};

export default clientsAdd;