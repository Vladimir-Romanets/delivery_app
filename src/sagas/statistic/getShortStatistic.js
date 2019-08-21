import { put, select } from 'redux-saga/effects';
import { getFormValues } from 'redux-form';
import { instance } from '../axios';
import actions from '../../actions';

const defaultObj = {
	servQuantity: 0,
	totalSpend: 0,
	totalIncome: 0,
};

function calculation(arr) {
	const data = arr.reduce((prev, { servQuantity, totalSpend, totalIncome }) => ({
			servQuantity: prev.servQuantity + servQuantity,
			totalSpend: prev.totalSpend + totalSpend,
			totalIncome: prev.totalIncome + totalIncome,
		}), defaultObj);
	data.difference = data.totalIncome - data.totalSpend;
	return { ...data };
}

function* getShortStatistic() {
	const state = yield select();
	const search = getFormValues('searchForm')(state);

	try {
		if( process.env.NODE_ENV !== "production" ){
			const data = {
				servQuantity: 97,
				totalSpend: 236703,
				totalIncome: 81091,
				difference: -155612,
				all_sum_data: [
					{
						client: "First",
						servQuantity: 1,
						totalSpend: 100,
						totalIncome: 150
					},
					{
						client: "Second",
						servQuantity: 2,
						totalSpend: 165,
						totalIncome: 400
					}
				]
			};
			const newData = calculation(data.all_sum_data);
			yield put(actions.getShortStatisticSuccess(newData));
		} else {
			const { data } = yield instance('getFinalPinches', {
				search,
				service_id: state.masterTable.currentServ,
				// next 2 parametrs set the limit of items in array which responded
				page: 1,
				limit: 100000,
			});
			const newData = calculation(data.all_sum_data);
			yield put(actions.getShortStatisticSuccess(newData));
		}
	} catch (e) {
		yield put( actions.notifierSetError({ message: e.message }) );
	};
};

export default getShortStatistic;