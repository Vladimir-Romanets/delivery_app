export const tableFields = ( currentServ ) => {
	switch ( currentServ ) {
		case 1: // Доставка
			return ['contract_id', 'invoice', 'sender', 'sender_address', 'recipient', 'address', 'shipmentType', 'dateSend', 'dateRecive', 'paymentType', 'shipmentPickup', 'shipmentReturn', 'courier', 'expense', 'income'];
		case 2: // Хранение
			return ['contract_id', 'invoice', 'sender', 'recipient', 'storageType', 'dateSend', 'dateRecive', 'paymentType', 'expense', 'income']
		case 3: // Почтовое обслуживание
			return ['contract_id', 'client', 'sender', 'recipient', 'address', 'dateSend', 'dateRecive', 'paymentType', 'courier', 'expense', 'income']
		case 4: // Пересылка ч/з ПОЧТА РФ
			return ['contract_id', 'invoice', 'sender', 'recipient', 'address', 'shipmentType', 'dateSend', 'dateRecive', 'paymentType', 'courier', 'expense', 'income']
		case 5: // Обработка документов
			return ['contract_id', 'sender', 'docProcessing', 'dateSend', 'dateRecive', 'paymentType', 'expense', 'income']
		case 6: // Аренда курьера
			return ['contract_id', 'client', 'serviceName', 'dateSend', 'dateRecive', 'paymentType', 'courier', 'expense', 'income']
		case 7: // Расходы
			return ['contract_id', 'client', 'client_adress', 'sender', 'recipient', 'serviceName', 'dateSend', 'dateRecive', 'courier', 'expense']
		default: // Все услуги
			return ['operator', 'contract_id', 'invoice', 'client', 'sender', 'recipient', 'address', 'serviceName', 'dateSend', 'dateRecive', 'paymentType', 'courier', 'expense', 'income'];
	}
};