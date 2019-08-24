import { put } from 'redux-saga/effects';
import { instance } from '../axios';
import { getMainHeaderSuccess, notifierSetError } from '../../actions';

function* getMainHeader(){
	try {

		if( process.env.NODE_ENV !== "production" ){
			const data = [
				{name: 'table', description: 'Главная таблица'},
				{name: 'clients', description: 'Клиенты'},
				{name: 'addressees', description: 'Адресаты'},
				{name: 'couriers', description: 'Курьеры'},
				{name: 'statistic', description: 'Статистика'},
				{name: 'add-user', description: 'Добавить пользователя'},
				{name: 'logout', description: 'Выход'}
			];
			yield put( getMainHeaderSuccess(data) );
		} else {
			const { data } = yield instance('getMenu');
			yield put( getMainHeaderSuccess(data) );
		}
	} catch (e) {
		yield put( notifierSetError({ message: e.message }) );
	};
};

export default getMainHeader;