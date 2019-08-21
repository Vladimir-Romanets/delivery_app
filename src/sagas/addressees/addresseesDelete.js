import { put } from 'redux-saga/effects';
import { showLoading, hideLoading } from 'react-redux-loading-bar';

import { instance } from '../axios';
import actions from '../../actions';

function* addresseesDelete({ id }) {

	const isConfirm = window.confirm('Вы хотите удалить адресата?');
	if ( !isConfirm ) return false;

	try {
		yield put( showLoading() );
		
		const { data } = yield instance( 'deleteContact', { id } );

		if ( data.status ){
			yield put( actions.addresseesGet() );
			yield put( actions.notifierSetSuccess({ message: 'Адресат успешно удален' }) );
			yield put( actions.addresseesEditReset() );
		} else {
			throw new Error(data.message || '')
		};
	} catch (e) {
		yield put( actions.notifierSetError({ message: e.message }) );
	} finally {
		yield put( hideLoading() );
	};
};

export default addresseesDelete;