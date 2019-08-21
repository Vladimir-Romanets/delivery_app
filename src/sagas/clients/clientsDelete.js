import { put } from 'redux-saga/effects';
import { showLoading, hideLoading } from 'react-redux-loading-bar';

import { instance } from '../axios';
import actions from '../../actions';

function* clientsDelete({ id }){

	const isConfirm = window.confirm('Вы хотите удалить Клиента?');
	if ( !isConfirm ) return false;

	try {
		yield put( showLoading() );

		const { data } = yield instance( 'deleteClient', { id } );

		if ( data.status ){
			yield put( actions.clientsGet() );
			yield put( actions.clientsEditReset() );
			yield put( actions.notifierSetSuccess({ message: 'Клиент успешно удален' }) );
		} else {
			throw new Error(data.message || '')
		};

	} catch (e) {
		yield put( actions.notifierSetError({ message: e.message }) );
	} finally {
		yield put( hideLoading() );
	};
};

export default clientsDelete;