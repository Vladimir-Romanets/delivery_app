export const autoSugestionRouteFormatter =(entity) => {
	const key = entity.split('.').pop();

	switch(key){
		case 'client':
			return 'getClients';
		case 'sender':
		case 'recepient':
			return 'getContacts';
		case 'courier':
		case 'takeShipment':
		case 'returnShipment':
			return 'getCouriers';
		default:
			return '';
	}
};