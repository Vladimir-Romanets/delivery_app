import { put, select } from 'redux-saga/effects';
import { showLoading, hideLoading } from 'react-redux-loading-bar';

import { instance } from '../axios';
import * as actions from '../../actions';
import { getCheckedList } from '../selectors';

function* groupPaymentChange({ payload }){
	const checkedList = yield select(getCheckedList)
	for (const key in payload){
		if (payload[key] === null) delete payload[key];
	};
	if (!Object.keys(payload).length) return;

	const data = {
		checkedList: Object.keys(checkedList),
		payment: { ...payload }
	}
	try {
		yield put(showLoading());
		const response = yield instance('replacePaymentInDelivery', data);

		if (response.data.rezoult){
			yield put(actions.groupPaymentChangeSuccess({ payment : data.payment }));
			yield put(actions.notifierSetSuccess({ message: 'Сохранено успешно' }))
		} else {
			throw new Error(data.message || 'Ошибка сохранения') 
		}
	} catch (e) {
		yield put( actions.notifierSetError({ message: e.message }) );
	} finally {
		yield put(hideLoading());
	};
};

export default groupPaymentChange;