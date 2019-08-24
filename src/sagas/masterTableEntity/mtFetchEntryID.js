import { put } from 'redux-saga/effects';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import get from 'lodash/get';

import { instance } from '../axios';
import { mtEditableEntryResponse, notifierSetError } from '../../actions';

function* mtFetchEntryID({ payload }){
	try {
		if( process.env.NODE_ENV !== "production" ){
			const list = {
				id: 234,
				service: 4,
				creationDate: "04.03.2018",
				operator: 'Korsed',
				client: {
					adress: "Клиент_Адрес",
					client_inn: "Клиент_ИНН",
					clients_name: "Клиент_Наименование",
					contact_face: "Клиент_Контактное лицо",
					comments: "Клиент_Коментарии",
					contract_id: "Клиент_Договор",
					email: "Клиент_Email",
					id: 1,
					phone: "380573723827"
				},
				courier:{
					id: 1,
					car: "Курьер_Авто",
					comments: "Курьер_Примечание",
					fio: "Курьер_ФИО",
					phone: "Курьер_Телефон",
				},
				deliveryAssets: {
					recepientDate: null,
					returnShipment: {
						id: "1",
						fio: "Фамилия имя отчество курьера"
					},
					sendDate: "2018-12-15 22:00:23",
					shipmentType: "1",
					statusReturnShipment: "1",
					statusTakeShipment: "1",
					takeShipment: {
						id: "1",
						fio: "Фамилия имя отчество курьера"
					}
				},
				docservice: {
					storageType: '1'
				},
				finances: {
					paymantType: 1,
					income: "852.32",
					comments: "Финансы_Комментарий",
					expense: "400",
					status_coming: 2,
					status_consumption: 1,
					invoice: "123/56"
				},
				keeping: {
					storageType: '1'
				},
				recepient: {
					id: 34,
					address: "Получатель_Адрес",
					contact_name: "Получатель_Наименование",
					email: "Получатель_E-mail",
					fio: "Получатель_ФИО",
					comments: "Получатель_Примечание",
					phone: "+7(961)8114141"
				},
				sender: {
					id: 345,
					address: "Адресат_Адрес",
					contact_name: "Адресат_Наименование",
					email: "Адресат_E-mail",
					fio: "Адресат_ФИО",
					comments: "Адресат_Примечание",
					phone: "Адресат_Телефон"
				}
			};
			yield put( mtEditableEntryResponse(list) );
		} else {
			yield put( showLoading() );

			const { data: { status, list, message } } = yield instance('getEventDelivery', payload);

			if(status){
				const recepientDate = get(list, 'deliveryAssets.recepientDate', '');
				const sendDate = get(list, 'deliveryAssets.sendDate', '');
				list.deliveryAssets = {
					...list.deliveryAssets,
					recepientDate,
					sendDate
				}

				if (+list.service === 2) {
					const type = get(list, 'keeping.storageType', 0)
					list.keeping = {
						...list.keeping,
						storageType: type.toString()
					}
				}
				if (+list.service === 4) {
					const shipmentType = Number(get(list, 'deliveryAssets.shipmentType', 4));
					delete list.deliveryAssets.shipmentType
					list.deliveryRFAssets = {
						shipmentType
					}
				}
				if(+list.service === 5){
					const type = get(list, 'docservice.storageType', 0)
					list.docservice = {
						...list.docservice,
						storageType: type.toString()
					}
				}
				yield put( mtEditableEntryResponse(list) );
			} else {
				throw Error(message || 'Ошибка получения записи');
			}
		}
	} catch (e) {
		yield put( notifierSetError({ message: e.message }) );
	} finally {
		yield put( hideLoading() );
	};
};

export default mtFetchEntryID;