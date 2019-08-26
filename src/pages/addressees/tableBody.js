import React from 'react';
import { TableModel } from './tableModel';
import { Colgroup } from '../../components/common/colgroup';

export const TableBody = ({ list, editingItem, addresseesEdit }) => {

	if ( list === null ) {
		list = <Colgroup />
	} else {
		list = list.length ?
		list.map( (el, i) => {
			const dubleClickHandler = () => addresseesEdit({...el});
			return (
				<TableModel
					{...el}
					number={ ++i }
					key={ el.id }
					dubleClickHandler={ dubleClickHandler }
				/>
			)
		}) : <Colgroup text='Записи отсутствуют' />
	};
	
	return (
		<div className='table__body'>
			{ list }
		</div>
	);
};