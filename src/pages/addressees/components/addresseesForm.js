import React from 'react';
import { Field, reduxForm, reset } from 'redux-form';

import FieldTextArea from '../../../components/FieldTextArea'
import { IcoADD } from '../../../components/icons';
import { validateField, required } from '../../../utils/validate';
import { phoneMask } from '../../../utils/phoneMask';

let AddresseesForm = props => {
	const {
		handleSubmit,
		parentClass = '',
		noteField = true,
		submitField = true,
		mngBtn = true,
		addresseesDelete = null,
		addresseesEditReset = null
	} = props;

	return (
		<form className={`form ${parentClass}`}>
			{submitField ?
				<div className='table__cell'>
					<div className='ico__add' onClick={handleSubmit} title='Сохранить адресат'>
						<IcoADD />
					</div>
				</div> : null
			}
			<div className='table__cell'>
				<Field
					component={validateField}
					validate={[required]}
					type='text'
					name='contact_name'
					placeholder='Название'
				/>
			</div>
			<div className='table__cell'>
				<Field
					component='input'
					type='text'
					name='fio'
					placeholder='ФИО'
				/>
			</div>
			<div className='table__cell'>
				<Field
					component={validateField}
					validate={[required]}
					type='text'
					name='address'
					placeholder='Адрес'
				/>
			</div>
			<div className='table__cell'>
				<Field
					component='input'
					type='text'
					name='phone'
					placeholder='Телефон'
					format={phoneMask}
				/>
			</div>
			<div className='table__cell'>
				<Field
					component='input'
					type='text'
					name='email'
					placeholder='E-mail'
				/>
			</div>
			{noteField &&
				<div className='table__cell'>
					<Field
						className='flex-block'
						name='comments'
						placeholder='Примечание'
						component={FieldTextArea}
					/>
				</div>
			}
			{mngBtn &&
				<div className='mng__btn'>
					<span className='btn --save' onClick={handleSubmit}>Сохранить</span>
					<span className='btn --delete' onClick={addresseesDelete}>Удалить</span>
					<span className='btn --cancel' onClick={addresseesEditReset}>Отмена</span>
				</div>
			}
		</form>
	)
};

const submitSuccess = (result, dispatch, { form }) => dispatch(reset(form));

export default reduxForm({
	form: ['text'],
	onSubmitSuccess: submitSuccess,
	enableReinitialize: true
})(AddresseesForm);