import React from 'react';
import { Field, FormSection } from 'redux-form';

import FieldTextArea from '../FieldTextArea'
import { phoneMask } from '../../utils/phoneMask';
import AutoComplete from '../autoComplete';

export const ServicePostalFields = ({navSelected}) => {
	const fullClassName = 'courier formgroup' + (navSelected === 20 ? ' active' : ' hidden');
	const name='courier';
	return (
		<FormSection name={name}>
			<div className={ fullClassName }>
				<div className="formgroup__title">
					Курьер
				</div>

				<div className='formgroup__cell'>
					<div className="flex-block">
						<label>ФИО:&nbsp;</label>
						<Field
							component='input'
							type='hidden'
							name='id'
						/>
						<Field
							component='input'
							type='hidden'
							name='fio'
						/>
						<AutoComplete entity={name} linkField="fio"	/>
					</div>
					<div className="flex-block">
						<label>Авто:&nbsp;</label>
						<Field
							component='input'
							type='text'
							name='car'
						/>
					</div>
					<div className="flex-block">
						<label>Телефон:&nbsp;</label>
						<Field
							component='input'
							format={ phoneMask }
							type='text'
							name='phone'
						/>
					</div>
				</div>

				<div className='formgroup__cell'>
					<Field
						className="flex-block"
						name='comments'
						component={FieldTextArea}
					/>
				</div>

			</div>
		</FormSection>
	)
}