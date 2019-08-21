import React from 'react';

export const NotifierItem = ({ list, noteCloseHandler }) => list.map(
	(el) => {
		noteCloseHandler(el.id);
		
		return (
			<div className={`notifier__item ${el.noteClass}`} key={ el.id }>
				{ el.message }
			</div>
		)
	}
)