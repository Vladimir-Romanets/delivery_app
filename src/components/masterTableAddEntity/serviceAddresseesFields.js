import React, { PureComponent } from 'react';
import { Field, FormSection } from 'redux-form';

import FieldTextArea from '../FieldTextArea'
import AutoComplete from '../autoComplete';
import { validateField, required } from '../../utils/validate';
import { phoneMask } from '../../utils/phoneMask';

class ServiceAddresseesFields extends PureComponent {
	static defaultProps = {
		navSelected: false,
		name: '',
		sectionTitle: 'Адресат',
	}

	render(){
		const { navSelected, name, sectionTitle } = this.props;
		const fieldMsg = name === 'recepient' ? 'получателя' : 'отправителя';
		const fieldName = name === 'recepient' ? 'statusUpdateRecepient' : 'statusUpdateSender';
		const checkboxID = `${fieldName}_checkbox`;
		return (
			<FormSection name={ name }>
				<div className={'formgroup' + (navSelected ? ' active' : ' hidden')}>
					<div className='formgroup__title'>
						{sectionTitle}
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
								validate={[ required ]}
								type='hidden'
								name='contact_name'
							/>
							<AutoComplete
								entity={ name }
								linkField="contact_name"
							/>
						</div>
						<div className="flex-block">
							<label>Адрес:&nbsp;</label>
							<Field
								component={ validateField }
								validate={[ required ]}
								type='text'
								name='address'
							/>
						</div>
					</div>

					<div className='formgroup__cell'>
						<div className="flex-block">
							<label>ФИО:&nbsp;</label>
							<Field
								component='input'
								type='text'
								name='fio'
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
							<label>E-mail:&nbsp;</label>
							<Field
								component='input'
								type='text'
								name='email'
							/>
						</div>
					</div>

					<div className='formgroup__cell'>
						<Field className='flex-block' name='comments' component={FieldTextArea}/>
					</div>

					<div className='checkbox-helpers'>
						<label htmlFor={checkboxID}>
							Добавить {fieldMsg}:&nbsp;
						</label>
						<Field
							component='input'
							type='checkbox'
							name={fieldName}
							id={checkboxID}
						/>
					</div>
				</div>
			</FormSection>
		)
	}
}

export default ServiceAddresseesFields;