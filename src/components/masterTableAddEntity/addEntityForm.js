import React, { PureComponent } from 'react';
import { Field, reduxForm, FormSection } from 'redux-form';

import { ServiceClientFields } from './serviceClientFields';
import { ServiceFinancesFields } from './serviceFinancesFields';
import { ServiceDeliveryFields } from './serviceDeliveryFields';
import { ServiceKeepingFields } from './serviceKeepingFields';
import { ServicePostalFields } from './servicePostalFields';
import { ServiceDocprocessingFields } from './serviceDocprocessingFields';
import { ServiceDeliveryRFFields } from './serviceDeliveryRFFields';
import ServiceAddresseesFields from "./serviceAddresseesFields";
import { DatesDetail } from "./datesDetail";

class addEntityForm extends PureComponent {
	static defaultProps = {
		parentClass: ''
	}

	render(){
		const { handleSubmit, deleteHandler, parentClass, currentServ, navSelected, closeAddForm, pristine } = this.props;
		const isDisabled = pristine ? 'disabled' : ''
		const isWide = window.innerWidth >= 1400;
		const isExeption = currentServ === 1 || currentServ === 4;
		const showDate = !isExeption || (isWide && navSelected === 12);

		return(
			<form className={`form ${parentClass}`}>
				<div className='formgroup hidden-group'>
					<div className='formgroup__cell'>
						<Field
							component='input'
							type='text'
							name='operator'
							placeholder='Оператор'
						/>
					</div>
					<div className='formgroup__cell'>
						<Field
							component='input'
							type='text'
							name='creationDate'
							placeholder='Дата создания'
						/>
					</div>
					<div className='formgroup__cell'>
						<Field
							component='input'
							type='hidden'
							name='service'
							placeholder='Услуга'
						/>
					</div>
				</div>

				<ServiceClientFields navSelected={navSelected} />
				
				{
					navSelected === 10 || isWide ? (
					<ServiceAddresseesFields
						navSelected
						name='sender'
						sectionTitle='Отправитель'
					/>) : null
				}
				
				{
					navSelected === 11 || isWide ? (
					<ServiceAddresseesFields
						navSelected
						name='recepient'
						sectionTitle='Получатель'
					/>) : null
				}

				{
					showDate ? (
					<FormSection name='deliveryAssets'>
						<div className={'formgroup' + (navSelected ? ' active' : ' hidden')}>
							<DatesDetail />
						</div>
					</FormSection>) : null
				}

				{
					currentServ === 1 ?
					<ServiceDeliveryFields navSelected={navSelected} /> : null
				}

				{
					currentServ === 2 ?
					<ServiceKeepingFields navSelected={navSelected} /> : null
				}

				{
					currentServ === 3 ?
					<ServicePostalFields navSelected={navSelected} /> : null
				}

				{
					currentServ === 4 ?
					<ServiceDeliveryRFFields navSelected={navSelected} /> : null
				}

				{
					currentServ === 5 ?
					<ServiceDocprocessingFields navSelected={navSelected} /> : null
				}

				{
					currentServ === 6 ?
					<ServicePostalFields navSelected={navSelected} /> : null
				}

				<ServiceFinancesFields navSelected={navSelected} />

				<div className='mng__btn'>
					<span className={`btn --save ${isDisabled}`} onClick={ handleSubmit } >Сохранить</span>
					{
						deleteHandler ?
						<span className='btn --delete' onClick={ deleteHandler }>Удалить</span> : null
					}
					<span className='btn --cancel' onClick={ closeAddForm }>Закрыть</span>
				</div>
			</form>
		)
	}
};

export default reduxForm({
	form: ['text'],
	enableReinitialize: true
})( addEntityForm );
