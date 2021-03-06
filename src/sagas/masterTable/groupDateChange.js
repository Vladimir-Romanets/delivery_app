import { put, select } from 'redux-saga/effects';
import { showLoading, hideLoading } from 'react-redux-loading-bar';

import { instance } from '../axios';
import { groupDateChangeSuccess, mtModalInfoClear, notifierSetSuccess, notifierSetError } from '../../actions';
import { getCheckedList } from '../selectors';

function* groupDateChange({ payload }) {
    const checkedList = yield select(getCheckedList)
    const data = {
        checkedList: Object.keys(checkedList),
        dateRecive: payload.date
    }

    try {
        yield put(showLoading());
        const { rezoult } = (yield instance('replaceDateSendInDelivery', data)).data;
        const changedList = [];
        for (const key in rezoult) {
            if (rezoult[key]) changedList.push(key);
        }

        yield put(groupDateChangeSuccess({ changedList, dateRecive: payload.date }));
        yield put(mtModalInfoClear({ entity: 'sendDate' }));
        yield put(notifierSetSuccess({ message: 'Сохранено успешно' }));

    } catch (e) {
        yield put(notifierSetError({ message: e.message }));
    } finally {
        yield put(hideLoading());
    };
};

export default groupDateChange;