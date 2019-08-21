import { put, select } from "redux-saga/effects";
import { delay } from "redux-saga";
import { instance } from '../axios';
import { getPageLimit } from '../selectors';
import actions from '../../actions';

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

		yield put(actions.clientsGetSuccess(data.list));
		yield put(
			actions.pagiGetSuccess({
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