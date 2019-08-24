import { put, all } from 'redux-saga/effects';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import moment from 'moment';

import { instance } from '../axios';
import { masterTableGetEntry, mtEditableEntryClose, notifierSetError, notifierSetSuccess } from '../../actions';

function* mtEditableEntrySave({ payload: { currentServ, ...basic } }){
	const { recepientDate, sendDate } = basic.deliveryAssets;
	basic.deliveryAssets = {
		...basic.deliveryAssets,
		recepientDate: /^\d{2}-\d{2}-\d{4}$/.test(recepientDate) ?
			recepientDate : (moment(recepientDate).isValid() ? moment(recepientDate).format("DD-MM-YYYY") : null),
		sendDate: /^\d{2}-\d{2}-\d{4}$/.test(sendDate) ?
			sendDate : (moment(sendDate).isValid() ? moment(sendDate).format("DD-MM-YYYY") : null)
	};

	try {
		yield put( showLoading() );

		const { data } = yield instance('editOtherDelivery', basic);

		if ( data.status ){
			yield put(masterTableGetEntry({ service_id: currentServ }) );
			yield all([
				// put(getShortStatistic()),	// обновляем статистику
				put( mtEditableEntryClose() ),
				put( notifierSetSuccess({ message: 'Запись успешно отредактирована.' }) ),
			]);
		} else {
			throw Error( data.message || 'Ошибка редактирования записи.' )
		};
	} catch (e) {
		yield put( notifierSetError({ message: e.message }) );
	} finally {
		yield put( hideLoading() );
	};
};

export default mtEditableEntrySave;