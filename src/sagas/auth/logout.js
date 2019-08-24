import { put } from 'redux-saga/effects';
import { instance } from '../axios';
import * as actions from '../../actions';

function* logout(){
	if (process.env.NODE_ENV !== "production") {
		return false;
	} else {
		try {
			yield instance( 'logOut' );
			sessionStorage.clear();
		} catch (e) {
			sessionStorage.clear();
			yield put( actions.notifierSetError({ message: e.message }) );
		};
	}
};

export default logout;