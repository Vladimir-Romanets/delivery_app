import { put } from 'redux-saga/effects';

import { instance } from '../axios';
import * as actions from '../../actions';
import { autoSugestionRouteFormatter } from '../../utils/autoSugestionRouteFormatter';

function* entityFormSelectSuggestion({ payload }){

	// const response = {
	// 	entity: payload.entity,
	// 	suggestion: {
	// 		id: 1,
	// 		fio: 'Qwerty',
	// 		client_inn: 1234567890123,
	// 		contract_id: 'A125/23',
	// 		adress: 'Москва, ул. Рыбалко, 23',
	// 		contact_face: 'Иван',
	// 		phone: 3258654782,
	// 		email: 'some@mail.com'
	// 	}
	// };

	const { entity, id, forForm = true } = payload;
	const routType = (autoSugestionRouteFormatter(entity)).slice(0,-1);

	if (!routType) throw Error('Ошибка выбора сущности. \n Обратитесь к системному администратору.');

	try {
		const { data } = yield instance(routType, {id});
		const suggestion = data[0];

		if (forForm) {
			yield put( actions.entityFormAddSuggestion({suggestion, entity}) );
		} else {
			yield put(actions.mtModalInfoSet({ suggestion, entity }) );
			// yield put(actions.mtModalInfoSet(response) );
		}
	} catch (e) {
		yield put( actions.notifierSetError({ message: e.message }) );
	};
};

export default entityFormSelectSuggestion;