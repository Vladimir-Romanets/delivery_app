import { put } from 'redux-saga/effects';
import { showLoading, hideLoading } from 'react-redux-loading-bar';

import { instance } from '../axios';
import { addresseesEditSuccess, addresseesEditReset, notifierSetSuccess, notifierSetError } from '../../actions';

function* addresseesEditSave({ data }){
	try {
		yield put( showLoading() );
		
		const {
			data: {
				status,
				message
			}
		} = yield instance('editContact', data);

		if ( status ){
			yield put( addresseesEditSuccess(data) );
			yield put( addresseesEditReset() );
			yield put( notifierSetSuccess({ message: 'Изменения успешно сохранены' }) );
		} else {
			throw new Error( message || 'Ошибка изменения записи' )
		}
	} catch (e) {
		yield put( notifierSetError({ message: e.message }) );
	} finally {
		yield put( hideLoading() );
	};
};

export default addresseesEditSave;