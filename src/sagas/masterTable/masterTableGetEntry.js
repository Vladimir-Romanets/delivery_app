import { put, all, select } from 'redux-saga/effects';
import { showLoading, hideLoading } from 'react-redux-loading-bar';

import { instance } from '../axios';
import { masterTableGetEntrySuccess, getShortStatistic, pagiGetSuccess, notifierSetError} from '../../actions';
import { getPageLimit, getCurrentPageNumber, searchForm } from '../selectors';

const exeptionsFields = {
	dateSendFrom: false,
	dateSendTo: false,
	dateReciveFrom: false,
	dateReciveTo: false,
}

const list = [
	{
		delivery_id: 22,
		serviceName: 'Доставка',
		operator: 'korsed',
		dateCreate: '21.11.2017',
		client: 'Alphabet',
		contract_id: '123/34H',
		sender: 'Иванов И.И.',
		sender_address: 'Харьков, пр.Ленина, 1',
		recipient: 'Петров. В.А.',
		address: 'Н.Новгород, Ленина, 48',
		dateSend: '19-11-2018',
		dateRecive: '25.11.2017',
		courier: 'Лысяк М.',
		shipmentType: 'Посылка',
		invoice: '# накладной',
		paymentType: 'Наличный',
		income: 800.5,
		expense: 600.78,
		status_coming: 0,
		shipmentPickup: 'Да',
		shipmentReturn: 'Нет',
		storageType: '',
		docProcessing: ''
	},
	{
		delivery_id: 23,
		serviceName: 'Хранение',
		operator: 'korsed2',
		dateCreate: '21.11.2017',
		client: 'Qwerty & Co',
		contract_id: '02/84H',
		sender: '',
		recipient: '',
		address: 'Н.Новгород, Ленина, 23',
		dateSend: '05-09-2018',
		dateRecive: '',
		courier: '',
		shipmentType: '',
		invoice: '# накладной',
		paymentType: 'Безнал',
		income: 200.58,
		expense: 100.7,
		status_coming: 1,
		shipmentPickup: '',
		shipmentReturn: '',
		storageType: 'Ячейка',
		docProcessing: ''
	},
	{
		delivery_id: 28,
		serviceName: 'Хранение',
		operator: 'korsed2',
		dateCreate: '21.11.2017',
		client: 'Qwerty & Co',
		contract_id: '02/84H',
		sender: '',
		recipient: '',
		address: 'Н.Новгород, Ленина, 23',
		dateSend: '06-09-2018',
		dateRecive: '',
		courier: '',
		shipmentType: '',
		invoice: '# накладной',
		paymentType: 'Безнал',
		income: 200.58,
		expense: 100.7,
		status_coming: 2,
		shipmentPickup: '',
		shipmentReturn: '',
		storageType: 'Ячейка',
		docProcessing: ''
	}
];

function* masterTableGetEntry({ payload }){
	const { values, active } = yield select(searchForm);

	if (exeptionsFields[active]) return true;

	if (values) {
		payload.search = values;
	}

	if ( !payload.limit ){
		payload.limit = yield select(getPageLimit);
	}

	if (!payload.page){
		payload.page = yield select(getCurrentPageNumber);
	}

	try {
		if (process.env.NODE_ENV === "development" ){
			yield put( masterTableGetEntrySuccess(list) );
		} else {
			yield put( showLoading() );

			const { data } = yield instance('getOtherDelivery', {...payload});
			
			yield put( masterTableGetEntrySuccess(data.list) );
			yield all([
				put(getShortStatistic()),	// обновляем статистику
				put(pagiGetSuccess({
					pageCount: data.other_count,
					currentPage: data.page,
					limit: payload.limit,
				}))
			])
		}
	} catch (e) {
		yield put( notifierSetError({ message: e.message }) );
	} finally {
		yield put( hideLoading() );
	};
};

export default masterTableGetEntry;