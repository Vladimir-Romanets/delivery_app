import { put } from 'redux-saga/effects';
import { showLoading, hideLoading } from 'react-redux-loading-bar';

import { instance } from '../axios';
import { couriersGet, couriersEditReset, notifierSetSuccess, notifierSetError } from '../../actions';

function* couriersDelete({ id }){

	const isConfirm = window.confirm('Вы хотите удалить курьера?');
	if ( !isConfirm ) return false;

	try {
		yield put( showLoading() );

		const { data } = yield instance('deleteCourier', {id});

		if (data.status){
			yield put( couriersGet() );
			yield put( couriersEditReset() );
			yield put( notifierSetSuccess({ message: 'Курьер успешно удален' }) );
		} else {
			throw new Error(data.message || '')
		};
	} catch (e) {
		yield put( notifierSetError({ message: e.message }) );
	} finally {
		yield put( hideLoading() );
	};
};

export default couriersDelete;