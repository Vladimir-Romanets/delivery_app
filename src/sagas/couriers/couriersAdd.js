import { put } from 'redux-saga/effects';
import { showLoading, hideLoading } from 'react-redux-loading-bar';

import { instance } from '../axios';
import { couriersGetSuccess, notifierSetSuccess, notifierSetError } from '../../actions';

function* couriersAdd({ data }){
	try {
		yield put( showLoading() );

		const { data: response } = yield instance('addNewCourier', data);
		
		if ( response.status ){
			yield put( couriersGetSuccess( response.list ) );
			yield put( notifierSetSuccess({ message: 'Курьер успешно добавлен' }) );
		} else {
			throw new Error( response.message || 'Ошибка добавления записи' )
		};
	} catch (e) {
		yield put( notifierSetError({ message: e.message }) );
	} finally {
		yield put( hideLoading() );
	};
};

export default couriersAdd;