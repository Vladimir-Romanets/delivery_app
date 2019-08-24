import { put } from 'redux-saga/effects';
import { showLoading, hideLoading } from 'react-redux-loading-bar';

import { instance } from '../axios';
import { addresseesGetSuccess, notifierSetSuccess, notifierSetError } from '../../actions';

function* addresseesAdd({ data }) {
	try {
		yield put( showLoading() );

		const { data: response } = yield instance('addNewContact', data);
		
		if ( response.status ){
			yield put( addresseesGetSuccess( response.list ) );
			yield put( notifierSetSuccess({ message: 'Адресат успешно добавлен' }) );
		} else {
			throw new Error( response.message || 'Ошибка добавления записи' )
		};
	} catch (e) {
		yield put( notifierSetError({ message: e.message }) );
	} finally {
		yield put( hideLoading() );
	};
};

export default addresseesAdd;