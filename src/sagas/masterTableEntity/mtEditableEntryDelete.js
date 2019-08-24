import { put, all } from 'redux-saga/effects';
import { showLoading, hideLoading } from 'react-redux-loading-bar';

import { instance } from '../axios';
import { masterTableGetEntry, mtEditableEntryClose, notifierSetSuccess, notifierSetError } from '../../actions';

function* mtEditableEntryDelete({payload}){

	const isConfirm = window.confirm('Вы хотите удалить запись?');
	if ( !isConfirm ) return false;

	try {
		yield put( showLoading() );
		
		const { data } = yield instance( 'deleteOtherDelivery', {id: payload.id} );

		if ( data.status ){
			yield put( masterTableGetEntry({service_id: payload.service}) );
			yield all([
				// put(getShortStatistic()),	// обновляем статистику
				put( mtEditableEntryClose() ),
				put( notifierSetSuccess({ message: 'Запись успешно удалена' }) ),
			]);
		} else {
			throw Error(data.message || 'Ошибка удаления записи');
		};
	} catch (e) {
		yield put( notifierSetError({ message: e.message }) );
	} finally {
		yield put( hideLoading() );
	};
};

export default mtEditableEntryDelete;