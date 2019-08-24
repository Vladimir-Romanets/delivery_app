import { put } from 'redux-saga/effects';

import { instance } from '../axios';
import { suggestionResponse, notifierSetError } from '../../actions';
import { autoSugestionRouteFormatter } from '../../utils/autoSugestionRouteFormatter';

// const response = {
// 	entity: 'courier',
// 	suggestions: [
// 		{
// 			id: 1,
// 			fio: 'Qwerty',
// 			client_inn: 1234567890123,
// 			contract_id: 'A125/23',
// 			adress: 'Москва, ул. Рыбалко, 23',
// 			contact_face: 'Иван',
// 			phone: 3258654782,
// 			email: 'some@mail.com'
// 		},
// 		{
// 			id: 2,
// 			fio: 'Qweruyh',
// 			client_inn: 4546234634634,
// 			contract_id: 'M154/235',
// 			adress: 'Москва, ул. Рыбалко, 25',
// 			contact_face: 'Саша',
// 			phone: 5456574354657,
// 			email: 'some2@mail3.com'
// 		}
// 	]
// };

function* findSuggestion({ payload }){
	const { entity, search } = payload;
	const routType = autoSugestionRouteFormatter(entity);

	if (!routType || search.length < 2) return [];

	const dataForSearch = {
		search,
		search_type: 'suggestion'
	};

	try {
		const { data: { list } } = yield instance(routType, dataForSearch);
		const suggestions = list.slice(0, 7);
		yield put( suggestionResponse({suggestions, entity}) );
		// yield put(suggestionResponse(response) );
	} catch (e) {
		yield put( notifierSetError({ message: e.message }) );
	};
};

export default findSuggestion;