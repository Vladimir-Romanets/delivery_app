import React from 'react';
import { Field, FormSection } from 'redux-form';
import { validateField, required } from '../../utils/validate';

export const ServiceKeepingFields = ({navSelected}) => {
	const fullClassName = 'formgroup full-width' + (navSelected === 30 ? ' active' : ' hidden');
	return (
		<React.Fragment>
			<FormSection name='keeping'>
				<div className={ fullClassName }>
					<div className="formgroup__title">
						Детали хранения
					</div>
					<div className='formgroup__cell'>
						<div>Тип:</div>
						<div className='text-nowrap'>
							<label>
								Разовая
								<Field
									name="storageType"
									component={ validateField }
									validate={[ required ]}
									type="radio"
									value="1"
								/>
								<b className='field-validation-marker'/>
							</label>
							<label>
								Ячейка
								<Field
									name="storageType"
									component={ validateField }
									validate={[ required ]}
									type="radio"
									value="2"
								/>
								<b className='field-validation-marker'/>
							</label>
						</div>
					</div>
				</div>
			</FormSection>
		</React.Fragment>
	)
}