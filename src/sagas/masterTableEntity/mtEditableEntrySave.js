import { put, all } from 'redux-saga/effects';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import moment from 'moment';

import { instance } from '../axios';
import * as actions from '../../actions';

function* mtEditableEntrySave({ payload: { currentServ, ...basic } }){
	const { recepientDate, sendDate } = basic.deliveryAssets;
	basic.deliveryAssets = {
		...basic.deliveryAssets,
		recepientDate: /^\d{2}-\d{2}-\d{4}$/.test(recepientDate) ?
			recepientDate : (moment(recepientDate).isValid() ? moment(recepientDate).format("DD-MM-YYYY") : null),
		sendDate: /^\d{2}-\d{2}-\d{4}$/.test(sendDate) ?
			sendDate : (moment(sendDate).isValid() ? moment(sendDate).format("DD-MM-YYYY") : null)
	};
	console.log(basic)
	try {
		yield put( showLoading() );

		const { data } = yield instance('editOtherDelivery', basic);

		if ( data.status ){
			yield put(actions.masterTableGetEntry({ service_id: currentServ }) );
			yield all([
				// put(actions.getShortStatistic()),	// обновляем статистику
				put( actions.mtEditableEntryClose() ),
				put( actions.notifierSetSuccess({ message: 'Запись успешно отредактирована.' }) ),
			]);
		} else {
			throw Error( data.message || 'Ошибка редактирования записи.' )
		};
	} catch (e) {
		yield put( actions.notifierSetError({ message: e.message }) );
	} finally {
		yield put( hideLoading() );
	};
};

export default mtEditableEntrySave;