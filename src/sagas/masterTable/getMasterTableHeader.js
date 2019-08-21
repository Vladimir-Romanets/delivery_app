import { put } from 'redux-saga/effects';
import { instance } from '../axios';
import actions from '../../actions';

function* getMasterTableHeader(){
	try {
		if( process.env.NODE_ENV !== "production" ){
			const theader = {
				serviceName: 'Вид услуги',
				operator: 'Оператор',
				dateCreate: 'Дата создания',
				client: 'Клиент',
				client_adress: 'Адрес клиента',
				contract_id: 'Договор',
				sender: 'Отправитель',
				recipient: 'Получатель',
				address: 'Адрес получателя',
				sender_address: 'Адрес отправителя',
				dateSend: 'Дата отправки',
				dateRecive: 'Дата получения',
				courier: 'Курьер',
				shipmentType: 'Тип отправления',
				invoice: '№ накладной',
				paymentType: 'Тип оплаты',
				income: 'Приход',
				expense: 'Расход',
				income_status: 'Оплата',
				shipmentPickup: 'Забор отправки',
				shipmentReturn: 'Возврат',
				storageType: 'Вид хранения',
				docProcessing: 'Обработка документов'
			};
			const services = [
				{ id: 1, service_type_name: 'Доставка' },
				{ id: 2, service_type_name: 'Хранение' },
				{ id: 3, service_type_name: 'Почтовое обслуживание' },
				{ id: 4, service_type_name: 'Пересылка ч/з ПОЧТА РФ' },
				{ id: 5, service_type_name: 'Обработка документов' },
				{ id: 6, service_type_name: 'Аренда курьера' },
				{ id: 7, service_type_name: 'Расходы' },
				{ id: 0, service_type_name: 'Все услуги' },
			];
			yield put( actions.setMasterTableHeader(theader) );
			yield put( actions.MTServicesGetSuccess(services) );
		} else {
			const {
				data: { list: theader }
			} = yield instance('getHeaderNameTable'); //Request to get table head

			const {
				data: { list: services }
			} = yield instance('getServiceTypes'); //Request to get services

			yield put( actions.setMasterTableHeader(theader) );
			yield put( actions.MTServicesGetSuccess(services) );
		}
	} catch (e) {
		yield put( actions.notifierSetError({ message: e.message }) );
	};
};

export default getMasterTableHeader;