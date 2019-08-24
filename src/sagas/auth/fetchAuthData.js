import { put } from 'redux-saga/effects';
import { instance } from '../axios';
import { setAuthStatus, notifierSetError } from '../../actions';

function* fetchAuthData({ data }){
	try {
		if( process.env.NODE_ENV !== "production" ){
			yield put( setAuthStatus({auth:true, login: data.login}) );
		} else {
			const { data: response } = yield instance( 'login', data );
			yield put( setAuthStatus(response) );
			if ( response.auth ){
				sessionStorage.setItem('delivery_token', response.token);
			}
		}
	} catch (e) {
		yield put( notifierSetError({ message: e.message }) );
	};
};

export default fetchAuthData;