import React from 'react';
import { Field, FormSection } from 'redux-form';

import FieldTextArea from '../FieldTextArea'
import { validateField, required } from '../../utils/validate';
import { normalizeCost } from '../../utils/normalizeCost';
import { paymentSelect } from '../common';

export const ServiceFinancesFields = ({navSelected}) => {
	const fullClassName = 'finances formgroup' + (navSelected === 1 ? ' active' : ' hidden');

	return (
		<FormSection name='finances'>
			<div className={ fullClassName }>
				<div className="formgroup__title">
					Финансы
				</div>

				<div className='formgroup__cell'>
					<div className='flex-block'>
						<label>№ накладной:&nbsp;</label>
						<Field
							component="input"
							type='text'
							name='invoice'
						/>
					</div>
					<div className='flex-block'>
						<label>Тип оплаты: &nbsp;</label>
						<Field name="paymantType" component="select">
							<option value={1}>Наличный</option>
							<option value={2}>Безналичный</option>
						</Field>
					</div>
				</div>

				<div className='formgroup__cell'>
					<div className='flex-block'>
						<label>Приход:&nbsp;</label>
						<Field
							component={ validateField }
							validate={[ required ]}
							normalize={ normalizeCost }
							type='text'
							name='income'
						/>
					</div>
					<div className='flex-block'>
						<label>Оплата (П):&nbsp;</label>
						<Field
							component={paymentSelect}
							name="status_coming"
						/>

						{/* <Field name="status_coming" component="select">
							<option value={0}>Нет</option>
							<option value={2}>Есть</option>
							<option value={1}>Частично</option>
							<option value={3}>Внимание</option>
						</Field> */}
					</div>
				</div>

				<div className='formgroup__cell'>
					<div className='flex-block'>
						<label>Расход:&nbsp;</label>
						<Field
							component={ validateField }
							validate={[ required ]}
							normalize={ normalizeCost }
							type='text'
							name='expense'
						/>
					</div>
					<div className='flex-block'>
						<label>Оплата (Р):&nbsp;</label>
						<Field
							component={paymentSelect}
							name="status_consumption"
						/>
						{/* <Field name="status_consumption" component="select">
							<option value={0}>Нет</option>
							<option value={2}>Есть</option>
							<option value={1}>Частично</option>
							<option value={3}>Внимание</option>
						</Field> */}
					</div>
				</div>

				<div className='formgroup__cell'>
					<Field
						type='text'
						name='comments'
						component={FieldTextArea}
					/>
				</div>
			</div>
		</FormSection>
	)
}