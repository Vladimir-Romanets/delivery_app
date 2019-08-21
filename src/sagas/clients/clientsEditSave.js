import { put } from 'redux-saga/effects';
import { showLoading, hideLoading } from 'react-redux-loading-bar';

import { instance } from '../axios';
import actions from '../../actions';

function* clientsEditSave({ data }){
	try {
		yield put( showLoading() );
		
		const {
			data: {
				status,
				message
			}
		} = yield instance('editClient', data);
		
		if ( status ){
			yield put( actions.clientsEditSuccess(data) );
			yield put( actions.notifierSetSuccess({ message: 'Изменения успешно сохранены' }) );
			yield put( actions.clientsEditReset() );
		} else {
			throw new Error( message || 'Ошибка изменения записи' )
		};
	} catch (e) {
		yield put( actions.notifierSetError({ message: e.message }) );
	} finally {
		yield put( hideLoading() );
	};
};

export default clientsEditSave;