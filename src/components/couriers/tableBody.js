import React from 'react';
import { Colgroup } from '../common/colgroup';

export const TableBody = ({ list, couriersEdit }) => {
	if ( list === null ) {
		list = <Colgroup />
	} else {
		list = list.length ?
		list.map( (el, i) => {
			const dubleClickHandler = () => couriersEdit({...el});

			return ( 
				<div className='table__row' key={ el.id } onDoubleClick={ dubleClickHandler }>
					<div className='table__cell'>{ ++i }</div>
					<div className='table__cell'>{ el.fio || '' }</div>
					<div className='table__cell'>{ el.car || '' }</div>
					<div className='table__cell'>{ el.phone || '' }</div>
					<div className='table__cell'>{ el.comments || '' }</div>
				</div>
			)
		}) : <Colgroup text='Записи отсутствуют' />
	}

	return (
		<div className='table__body'>
			{ list }
		</div>
	);
};