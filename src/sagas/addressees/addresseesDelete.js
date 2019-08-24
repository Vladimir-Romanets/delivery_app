import { put } from 'redux-saga/effects';
import { showLoading, hideLoading } from 'react-redux-loading-bar';

import { instance } from '../axios';
import { addresseesGet, notifierSetSuccess, addresseesEditReset, notifierSetError }from '../../actions';

function* addresseesDelete({ id }) {

	const isConfirm = window.confirm('Вы хотите удалить адресата?');
	if ( !isConfirm ) return false;

	try {
		yield put( showLoading() );
		
		const { data } = yield instance( 'deleteContact', { id } );

		if ( data.status ){
			yield put( addresseesGet() );
			yield put( notifierSetSuccess({ message: 'Адресат успешно удален' }) );
			yield put( addresseesEditReset() );
		} else {
			throw new Error(data.message || '')
		};
	} catch (e) {
		yield put( notifierSetError({ message: e.message }) );
	} finally {
		yield put( hideLoading() );
	};
};

export default addresseesDelete;