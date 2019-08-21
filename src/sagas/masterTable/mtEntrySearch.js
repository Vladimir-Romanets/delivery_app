import { delay } from "redux-saga/effects";

import masterTableGetEntry from './masterTableGetEntry';
import getShortStatistic from '../statistic/getShortStatistic';

function* mtEntrySearch({ payload: { service_id }}) {
	yield delay(700)
	yield getShortStatistic()
	yield masterTableGetEntry({ payload: { service_id } })
};

export default mtEntrySearch;