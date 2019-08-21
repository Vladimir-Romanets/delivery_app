import React from 'react';
import { Field, FormSection } from 'redux-form';

import FieldTextArea from '../FieldTextArea'
import { validateField, required } from '../../utils/validate';
import { phoneMask } from '../../utils/phoneMask';
import AutoComplete from '../autoComplete';

export const ServiceClientFields = ({ navSelected }) => {
	const fullClassName = 'formgroup' + (navSelected === 0 ? ' active' : ' hidden');
	const name='client';

	return (
		<FormSection name={name}>
			<div className={ fullClassName }>
				<div className="formgroup__title">
					Клиент
				</div>

				<div className='formgroup__cell'>
					<div className="flex-block">
						<label>Наименование:&nbsp;</label>
						<Field
							component='input'
							type='hidden'
							name='id'
						/>
						<Field
							component={ validateField }
							type='hidden'
							name='clients_name'
							placeholder='Наименование'
							validate={[ required ]}
						/>
						<AutoComplete
							entity={name}
							linkField="clients_name"
						/>
					</div>
					<div className="flex-block">
						<label>Договор:&nbsp;</label>
						<Field
							component='input'
							type='text'
							name='contract_id'
						/>
					</div>
				</div>

				<div className='formgroup__cell'>
					<div className="flex-block">
						<label>Контактное&nbsp;лицо:&nbsp;</label>
						<Field
							component='input'
							type='text'
							name='contact_face'
						/>
					</div>
					<div className="flex-block">
						<label>Телефон:&nbsp;</label>
						<Field
							component='input'
							type='text'
							name='phone'
							format={ phoneMask }
						/>
					</div>
				</div>

				<div className='formgroup__cell'>
					<div className="flex-block">
						<label>Адрес:&nbsp;</label>
						<Field component='input' type='text' name='adress' />
					</div>
					<div className="flex-block">
						<label>Email:&nbsp;</label>
						<Field
							component='input'
							type='text'
							name='email'
						/>
					</div>
				</div>

				<div className='formgroup__cell'>
					<div className="flex-block">
						<label>ИНН:&nbsp;</label>
						<Field component='input' type='text' name='client_inn' />
					</div>
					<Field className='flex-block' name='comments' component={FieldTextArea}/>
				</div>
			</div>
		</FormSection>
	)
};