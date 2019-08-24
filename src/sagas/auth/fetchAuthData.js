import { put } from 'redux-saga/effects';
import { instance } from '../axios';
import * as actions from '../../actions';

function* fetchAuthData({ data }){
	try {
		if( process.env.NODE_ENV !== "production" ){
			yield put( actions.setAuthStatus({auth:true, login: data.login}) );
		} else {
			const { data: response } = yield instance( 'login', data );
			yield put( actions.setAuthStatus(response) );
			if ( response.auth ){
				sessionStorage.setItem('delivery_token', response.token);
			}
		}
	} catch (e) {
		yield put( actions.notifierSetError({ message: e.message }) );
	};
};

export default fetchAuthData;