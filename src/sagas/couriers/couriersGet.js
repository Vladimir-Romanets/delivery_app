import { put, select } from 'redux-saga/effects';
import { showLoading, hideLoading } from 'react-redux-loading-bar';

import { instance } from '../axios';
import * as actions from '../../actions';
import { getPageLimit, getCurrentPageNumber } from '../selectors';

function* couriersGet({ payload = {} }){
	if (!payload.limit) {
		payload.limit = yield select(getPageLimit);
	}

	if (!payload.page) {
		payload.page = yield select(getCurrentPageNumber);
	}

	try {
		// const data = {
		// 	status: true,
		// 	list: [
		// 		{
		// 			car: "номер машини",
		// 			comments: "коментарий",
		// 			fio: "ФИО",
		// 			id: "1",
		// 			phone: "0953812827"
		// 		},
		// 		{
		// 			car: "цуацуацуа",
		// 			comments: "цуацуацуа",
		// 			fio: "цуацуа",
		// 			id: "2",
		// 			phone: "234234234"
		// 		}
		// 	]
		// };
		yield put( showLoading() );

		const { data } = yield instance('getCouriers', {...payload});

		if (data.status) {
			yield put( actions.couriersGetSuccess(data.list) );
			yield put(
				actions.pagiGetSuccess({
					pageCount: data.other_count,
					currentPage: data.page,
					limit: payload.limit,
				})
			);
		} else {
			throw new Error( data.message || 'Ошибка получения данных' );
		};
		
	} catch (e) {
		yield put( actions.notifierSetError({ message: e.message }) );
	} finally {
		yield put( hideLoading() );
	};
};

export default couriersGet;