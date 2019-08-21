import { takeEvery, takeLatest } from 'redux-saga/effects';
import types from '../../const';
import getMasterTableHeader from './getMasterTableHeader';
import masterTableGetEntry from './masterTableGetEntry';
import mtEntrySearch from './mtEntrySearch';
import groupPaymentChange from './groupPaymentChange';
import groupCourierChange from './groupCourierChange';
import groupDateChange from './groupDateChange';
import findAddressDelivery from './findAddressDelivery';
import getRouteSheetFile from './getRouteSheetFile';

export default function* masterTable() {
	yield takeLatest(types.MASTER_TABLE_GET_ENTRY, masterTableGetEntry);
	yield takeLatest(types.MT_ENTRY_SEARCH, mtEntrySearch);
	yield takeLatest(types.FIND_ADDRESS_DELIVERY, findAddressDelivery);
	yield takeEvery(types.GET_MASTER_TABLE_HEADER, getMasterTableHeader);
	yield takeEvery(types.GROUP_PAYMENT_CHANGE, groupPaymentChange);
	yield takeEvery(types.GROUP_COURIER_CHANGE, groupCourierChange);
	yield takeEvery(types.GROUP_DATE_CHANGE, groupDateChange);
	yield takeEvery(types.GET_ROUTE_SHEET, getRouteSheetFile);
};