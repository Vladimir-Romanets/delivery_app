import { put } from 'redux-saga/effects';
import { showLoading, hideLoading } from 'react-redux-loading-bar';

import { instance } from '../axios';
import * as actions from '../../actions';
import { serviceDataFormatter } from '../../utils/serviceDataFormatter';

function* mtEntityAdd({ payload: { closeAddForm, currentServ, ...rest } }){
	const requestData = serviceDataFormatter(rest);
	console.log(requestData)
	try {
		if (!requestData) throw Error('Сервис не выбран');

		yield put( showLoading() );

		const { data } = yield instance('addOtherDelivery', requestData);

		if ( data.status ){
			yield put(actions.masterTableGetEntry({ service_id: currentServ}) );
			// put(actions.getShortStatistic()), // обновляем статистику
			yield put( actions.notifierSetSuccess({ message: 'Запись успешно добавлена' }) );
			closeAddForm()
		} else {
			throw Error( data.message || 'Ошибка добавления записи' );
		};
	} catch (e) {
		yield put( actions.notifierSetError({ message: e.message }) );
	} finally {
		yield put( hideLoading() );
	};
};

export default mtEntityAdd;