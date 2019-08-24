import { put } from 'redux-saga/effects';
import { showLoading, hideLoading } from 'react-redux-loading-bar';

import { instance } from '../axios';
import { clientsEditSuccess, notifierSetSuccess, clientsEditReset, notifierSetError } from '../../actions';

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
			yield put( clientsEditSuccess(data) );
			yield put( notifierSetSuccess({ message: 'Изменения успешно сохранены' }) );
			yield put( clientsEditReset() );
		} else {
			throw new Error( message || 'Ошибка изменения записи' )
		};
	} catch (e) {
		yield put( notifierSetError({ message: e.message }) );
	} finally {
		yield put( hideLoading() );
	};
};

export default clientsEditSave;