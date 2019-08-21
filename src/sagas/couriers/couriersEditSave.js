import { put } from 'redux-saga/effects';
import { showLoading, hideLoading } from 'react-redux-loading-bar';

import { instance } from '../axios';
import actions from '../../actions';

function* couriersEditSave({ data }){
	try {
		yield put( showLoading() );
		
		const {
			data: {
				status,
				message
			}
		} = yield instance('editCourier', data);

		if ( status ){
			yield put( actions.couriersEditSuccess(data) );
			yield put( actions.notifierSetSuccess({ message: 'Изменения успешно сохранены' }) );
			yield put( actions.couriersEditReset() );
		} else {
			throw new Error( message || 'Ошибка изменения записи' )
		}
	} catch (e) {
		yield put( actions.notifierSetError({ message: e.message }) );
	} finally {
		yield put( hideLoading() );
	};
};

export default couriersEditSave;