import { put, select } from 'redux-saga/effects';
import { showLoading, hideLoading } from 'react-redux-loading-bar';

import { instance } from '../axios';
import { clientsGetSuccess, pagiGetSuccess, notifierSetError} from '../../actions';
import { getPageLimit, getCurrentPageNumber } from '../selectors';

const mockData = {
	status: true,
	other_count: 115,
	page: 1,
	list: [
		{
			adress: "Адресс",
			client_inn: "243523534524234",
			clients_name: "gr",
			comments: "Коментарий1",
			contact_face: "Контактное лицо1",
			email: "hadadnm@ukr.net",
			id: "1",
			contract_id: "32454",
			phone: "0953812827"
		},
		{
			adress: "Адресс",
			client_inn: "243523534524234",
			comments: "Коментарий2",
			contact_face: "Контактное лицо2",
			clients_name: "eerg",
			email: "hadadnm@ukr.net",
			id: "2",
			contract_id: "324",
			phone: "0953812827"
		},
		{
			adress: "Адресс",
			client_inn: "243523534524234",
			comments: "Коментарий2",
			contact_face: "Контактное лицо2",
			clients_name: "eerg",
			email: "hadadnm@ukr.net",
			id: "3",
			contract_id: "324",
			phone: "0953812827"
		},
		{
			adress: "Адресс",
			client_inn: "243523534524234",
			comments: "Коментарий2",
			contact_face: "Контактное лицо2",
			clients_name: "eerg",
			email: "hadadnm@ukr.net",
			id: "4",
			contract_id: "324",
			phone: "0953812827"
		},
		{
			adress: "Адресс",
			client_inn: "243523534524234",
			comments: "Коментарий2",
			contact_face: "Контактное лицо2",
			clients_name: "eerg",
			email: "hadadnm@ukr.net",
			id: "5",
			contract_id: "324",
			phone: "0953812827"
		},
		{
			adress: "Адресс",
			client_inn: "243523534524234",
			comments: "Коментарий2",
			contact_face: "Контактное лицо2",
			clients_name: "eerg",
			email: "hadadnm@ukr.net",
			id: "6",
			contract_id: "324",
			phone: "0953812827"
		},
		{
			adress: "Адресс",
			client_inn: "243523534524234",
			comments: "Коментарий2",
			contact_face: "Контактное лицо2",
			clients_name: "eerg",
			email: "hadadnm@ukr.net",
			id: "7",
			contract_id: "324",
			phone: "0953812827"
		},
		{
			adress: "Адресс",
			client_inn: "243523534524234",
			comments: "Коментарий2",
			contact_face: "Контактное лицо2",
			clients_name: "eerg",
			email: "hadadnm@ukr.net",
			id: "8",
			contract_id: "324",
			phone: "0953812827"
		},
		{
			adress: "Адресс",
			client_inn: "243523534524234",
			comments: "Коментарий2",
			contact_face: "Контактное лицо2",
			clients_name: "eerg",
			email: "hadadnm@ukr.net",
			id: "9",
			contract_id: "324",
			phone: "0953812827"
		},
		{
			adress: "Адресс",
			client_inn: "243523534524234",
			comments: "Коментарий2",
			contact_face: "Контактное лицо2",
			clients_name: "eerg",
			email: "hadadnm@ukr.net",
			id: "10",
			contract_id: "324",
			phone: "0953812827"
		},
		{
			adress: "Адресс",
			client_inn: "243523534524234",
			comments: "Коментарий2",
			contact_face: "Контактное лицо2",
			clients_name: "eerg",
			email: "hadadnm@ukr.net",
			id: "11",
			contract_id: "324",
			phone: "0953812827"
		},
		{
			adress: "Адресс",
			client_inn: "243523534524234",
			comments: "Коментарий2",
			contact_face: "Контактное лицо2",
			clients_name: "eerg",
			email: "hadadnm@ukr.net",
			id: "12",
			contract_id: "324",
			phone: "0953812827"
		}
	]
};

function* clientsGet({payload = {}}){
	if (!payload.limit) {
		payload.limit = yield select(getPageLimit);
	}

	if (!payload.page) {
		payload.page = yield select(getCurrentPageNumber);
	}

	try {
		
		yield put( showLoading() );

		const { data } = process.env.NODE_ENV === "development" ?
			{ data: mockData } :
			yield instance('getClients', {...payload});

		if (data.status) {
			yield put( clientsGetSuccess(data.list) );
			yield put(
				pagiGetSuccess({
					pageCount: data.other_count,
					currentPage: data.page,
					limit: payload.limit,
				})
			);
		} else {
			throw new Error( data.message || 'Ошибка получения данных' );
		};
	} catch (e) {
		yield put( notifierSetError({ message: e.message }) );
	} finally {
		yield put( hideLoading() );
	};
};

export default clientsGet;