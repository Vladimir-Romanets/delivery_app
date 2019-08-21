import React from 'react';
import { Field, FormSection } from 'redux-form';
import { validateField, required } from '../../utils/validate';

export const ServiceDocprocessingFields = ({ navSelected }) => {
	const fullClassName = 'formgroup' + (navSelected === 40 ? ' active' : ' hidden');
	return (
		<React.Fragment>
			<FormSection name='docservice'>
				<div className={ fullClassName }>
					<div className="formgroup__title">
						Детали обработки
					</div>
					<div className='formgroup__cell'>
						<div>Тип:</div>
						<div className='text-nowrap'>
							<label>
								Сканирование/копирование
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
								Обработка
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