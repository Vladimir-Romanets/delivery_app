import { put, select } from 'redux-saga/effects';
import { showLoading, hideLoading } from 'react-redux-loading-bar';

import { instance } from '../axios';
import actions from '../../actions';
import { getPageLimit, getCurrentPageNumber } from '../selectors';

function* addresseesGet({ payload = {} }){
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
		// 			id: 123,
		// 			contact_name: 'Qwerty & Co',
		// 			fio: 'Петров И.И.',
		// 			address: 'СПБ, пр. Юбилейный, 25',
		// 			phone: '+38 (044) 21-22-256',
		// 			email: 'somemail@gmail.com',
		// 			comments: 'Какое то примечание'
		// 		},
		// 		{
		// 			id: 124,
		// 			contact_name: 'Alphabeta',
		// 			fio: 'Иванов И.И.',
		// 			address: 'Н.Новгород, пр. Ленина, 1',
		// 			phone: '+38 (044) 76-77-765',
		// 			email: 'somemail@mail.ru',
		// 			comments: 'Какое то примечание'
		// 		}
		// 	]
		// };
		yield put( showLoading() );

		const { data } = yield instance('getContacts', {...payload});
		
		if (data.status) {
			yield put( actions.addresseesGetSuccess(data.list) );
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

export default addresseesGet;