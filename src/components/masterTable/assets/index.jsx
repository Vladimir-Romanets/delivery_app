import React from 'react';
import { IcoADD } from '../../icons';
import { SelectService } from '../selectService';

export const Assets = (props) => {
	const {
		currentServ,
		services,
		servChangeHandler,
		addClickHandler,
	} = props;

	return (
		<div className='assets'>
			<div className='assets__item'>
				<SelectService
					defaultValue={ currentServ }
					changeHandler={ servChangeHandler }
					services={ services }
				/>
			</div>
			
			<div className='assets__item'>
				<span onClick={ addClickHandler }>
					<IcoADD />
				</span>
			</div>
		</div>
	)
};