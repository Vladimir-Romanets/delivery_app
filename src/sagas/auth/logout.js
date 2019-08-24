import { put } from 'redux-saga/effects';
import { instance } from '../axios';
import { notifierSetError, } from '../../actions';

function* logout(){
	if (process.env.NODE_ENV !== "production") {
		return false;
	} else {
		try {
			yield instance( 'logOut' );
			sessionStorage.clear();
		} catch (e) {
			sessionStorage.clear();
			yield put( notifierSetError({ message: e.message }) );
		};
	}
};

export default logout;