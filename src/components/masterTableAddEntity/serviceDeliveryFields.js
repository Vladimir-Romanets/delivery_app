import React, { Fragment } from 'react';
import { Field, FormSection } from 'redux-form';

import { validateSelectField, required } from '../../utils/validate';
import { ServicePostalFields } from './servicePostalFields';
import { DatesDetail } from "./datesDetail";
import ServiceDeliveryFieldsAdditional from './serviceDeliveryFieldsAdditional';

export const ServiceDeliveryFields = ({navSelected}) => (
	<Fragment>

		<ServicePostalFields navSelected={ navSelected } />

		<FormSection name='deliveryAssets'>
			<div className={'delivery formgroup' + (navSelected === 12 ? ' active' : ' hidden')}>
				<DatesDetail />
				
				<div className='formgroup__cell'>
					<label>Тип&nbsp;отправления:&nbsp;</label>
					<Field
						name="shipmentType"
						component={ validateSelectField }
						validate={[ required ]} >
							<option value={1}>Эконом</option>
							<option value={2}>Экспресс</option>
							<option value={3}>Специальное</option>
					</Field>
				</div>

				<ServiceDeliveryFieldsAdditional />

			</div>
		</FormSection>
	</Fragment>
)