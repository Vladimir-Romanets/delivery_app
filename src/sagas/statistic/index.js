import { takeLatest } from 'redux-saga/effects';
import types from '../../const';
import getShortStatistic from './getShortStatistic';

export default function* statistic() {
	yield takeLatest(types.GET_SHORT_STATISTIC, getShortStatistic);
};