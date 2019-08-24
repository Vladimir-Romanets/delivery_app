import { put, select, delay } from "redux-saga/effects";

import { instance } from '../axios';
import { getPageLimit } from '../selectors';
import { couriersGetSuccess, pagiGetSuccess } from '../../actions';

function* couriersSearch(payload) {
	try {
		yield delay(700);
		const limit = yield select(getPageLimit);
		const request = {
			page: 1,
			limit,
			search: payload.data
		}
		const { data } = yield instance('getCouriers', request);

		yield put(couriersGetSuccess(data.list));
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

export default couriersSearch;