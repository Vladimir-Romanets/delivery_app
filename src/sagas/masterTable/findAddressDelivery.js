import { put } from 'redux-saga/effects';
import { showLoading, hideLoading } from 'react-redux-loading-bar';

import { instance } from '../axios';
import actions from '../../actions';
import { getCheckedList } from '../selectors';

function* findAddressDelivery({ payload }) {
    try {
		yield put(showLoading());
		const response = yield instance('getCourierReport', payload);
		console.log('send:', payload, '/n recive:', response);

        // yield put(actions.mtModalInfoClear({ entity: 'courier' }));
        // yield put(actions.notifierSetSuccess({ message: 'Сохранено успешно' }));

    } catch (e) {
        yield put(actions.notifierSetError({ message: e.message }));
    } finally {
        yield put(hideLoading());
    };
};

export default findAddressDelivery;