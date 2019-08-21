import React from 'react';
import { Field, FormSection } from 'redux-form';

import { validateSelectField, required } from '../../utils/validate';
import { ServicePostalFields } from './servicePostalFields';
import { DatesDetail } from "./datesDetail";

export const ServiceDeliveryRFFields = ({navSelected}) => (
	<React.Fragment>
		<ServicePostalFields navSelected={ navSelected } />

		<div className={'formgroup' + (navSelected === 12 ? ' active' : ' hidden')}>
			<FormSection name='deliveryAssets'>
				<DatesDetail />
			</FormSection>

			<FormSection name='deliveryRFAssets'>
				<div className='formgroup__cell full-width'>
					<label className='text-nowrap'>
						Тип отправления:&nbsp;
						<Field
							name="shipmentType"
							component={ validateSelectField }
							validate={[ required ]}>
							<option value={4}>Разовая</option>
							<option value={5}>Ячейка</option>
							<option value={3}>Специальное</option>
						</Field>
					</label>
				</div>
			</FormSection>
		</div>
	</React.Fragment>
)