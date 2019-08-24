import { put } from 'redux-saga/effects';
import { showLoading, hideLoading } from 'react-redux-loading-bar';

import { instance } from '../axios';
import * as actions from '../../actions';

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
			yield put( actions.addresseesEditSuccess(data) );
			yield put( actions.addresseesEditReset() );
			yield put( actions.notifierSetSuccess({ message: 'Изменения успешно сохранены' }) );
		} else {
			throw new Error( message || 'Ошибка изменения записи' )
		}
	} catch (e) {
		yield put( actions.notifierSetError({ message: e.message }) );
	} finally {
		yield put( hideLoading() );
	};
};

export default addresseesEditSave;