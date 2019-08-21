import { call } from 'redux-saga/effects';
import { path } from '../config';
import axios from "axios";

function* sendSupport( action ){
	const header = document.querySelector('[name="csrf-token"]');
	const xsrf = header ? header.content : null;

	const { route } = action.data;
	let val = '{' + action.data.val + '}';	
	val = eval("(" + val + ")");
	val.token = sessionStorage.getItem('delivery_token');
	const headers = {
		'X-Requested-With': 'XMLHttpRequest',
		'X-CSRF-TOKEN': xsrf
	};
	const data = { ...val };
	
	try {
		const user = yield call(axios.post, `${path}${route}`, {data}, {headers});
		console.log('---------------------- Ответ от сервера:', user);

	} catch (e) {
		console.log(e);
		//yield put({type: "USER_FETCH_FAILED", message: e.message});
	};
};

export default sendSupport;