import { put } from 'redux-saga/effects';
import { showLoading, hideLoading } from 'react-redux-loading-bar';

import { instance } from '../axios';
import { notifierSetError } from '../../actions';

function* findAddressDelivery({ payload }) {
  try {
		yield put(showLoading());
		const response = yield instance('getCourierReport', payload);
		console.log('send:', payload, '/n recive:', response);

      // yield put(mtModalInfoClear({ entity: 'courier' }));
      // yield put(notifierSetSuccess({ message: 'Сохранено успешно' }));

  } catch (e) {
    yield put(notifierSetError({ message: e.message }));
  } finally {
    yield put(hideLoading());
  };
};

export default findAddressDelivery;