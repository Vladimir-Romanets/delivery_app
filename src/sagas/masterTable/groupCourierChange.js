import { put, select } from 'redux-saga/effects';
import { showLoading, hideLoading } from 'react-redux-loading-bar';

import { instance } from '../axios';
import * as actions from '../../actions';
import { getCheckedList } from '../selectors';

function* groupCourierChange({ payload }) {
    const checkedList = yield select(getCheckedList)
    const data = {
        checkedList: Object.keys(checkedList),
        courierID: payload.id
    }

    try {
        yield put(showLoading());
        const { rezoult } = (yield instance('replaceCourierInDelivery', data)).data;
        const changedList = [];
        for (const key in rezoult){
            if (rezoult[key]) changedList.push(key);
        }

        yield put(actions.groupCourierChangeSuccess({ changedList, fio: payload.fio }));
        yield put(actions.mtModalInfoClear({ entity: 'courier' }));
        yield put(actions.notifierSetSuccess({ message: 'Сохранено успешно' }));

    } catch (e) {
        yield put(actions.notifierSetError({ message: e.message }));
    } finally {
        yield put(hideLoading());
    };
};

export default groupCourierChange;