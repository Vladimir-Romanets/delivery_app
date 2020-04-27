import React from 'react';
import { Colgroup } from '../../../components/common/colgroup';

export const TableBody = ({ list, clientsEdit }) => {

	if (list === null) {
		list = <Colgroup />
	} else {
		list = list.length ?
			list.map((el, i) => {
				const dubleClickHandler = () => clientsEdit({ ...el });
				return (
					<div
						className='table__row'
						key={el.id}
						onDoubleClick={dubleClickHandler}
						title={el.comments || ''}>

						<div className='table__cell'>{++i}</div>
						<div className='table__cell'>{el.clients_name || ''}</div>
						<div className='table__cell'>{el.client_inn || ''}</div>
						<div className='table__cell'>{el.contract_id || ''}</div>
						<div className='table__cell'>{el.adress || ''}</div>
						<div className='table__cell'>{el.contact_face || ''}</div>
						<div className='table__cell'>{el.phone || ''}</div>
						<div className='table__cell'>{el.email || ''}</div>
					</div>
				)
			}) : <Colgroup text='Записи отсутствуют' />
	};

	return (
		<div className='table__body'>
			{list}
		</div>
	)
};