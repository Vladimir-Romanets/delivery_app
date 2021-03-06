import { put, select, delay } from "redux-saga/effects";

import { instance } from '../axios';
import { getPageLimit } from '../selectors';
import { clientsGetSuccess, pagiGetSuccess, } from '../../actions';

function* clientsSearch(payload){
	try {
		yield delay(700)
		const limit = yield select(getPageLimit);
		const request = {
			page: 1,
			limit,
			search: payload.data
		}
		const { data } = yield instance('getClients', request);

		yield put(clientsGetSuccess(data.list));
		yield put(
			pagiGetSuccess({
				pageCount: data.other_count,
				currentPage: data.page
			})
		);
	} catch (e) {
		console.log(e);
		//yield put({type: "USER_FETCH_FAILED", message: e.message});
	};
};

export default clientsSearch;