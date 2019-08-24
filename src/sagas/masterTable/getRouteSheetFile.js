import { put, select } from 'redux-saga/effects';

import { instance } from '../axios';
import * as actions from '../../actions';
import { getCheckedList } from '../selectors';

function* getRouteSheetFile() {
    const checkedList = yield select(getCheckedList)
    const data = {
        id: Object.keys(checkedList).join(','),
    }

    try {

        const { url } = (yield instance('getCourierReport', data)).data;
        const fullUrl = window.location.origin + url;
        window.open(fullUrl, 'report')

    } catch (e) {
        yield put(actions.notifierSetError({ message: e.message }));
    };
};

export default getRouteSheetFile;