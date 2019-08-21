import React from 'react';
import { Field, reduxForm } from 'redux-form';

import './style.css';

let AuthorizationForm = ({ handleSubmit, parentClassName }) => (
	<form onSubmit={ handleSubmit } className={ `auth-form ${parentClassName}` }>

		<div className='auth-form__header'>
			Форма авторизации
		</div>

		<div className='auth-form__row' >
			<Field
				component='input'
				type='text'
				name='login'
				id='login'
				required
			/>
			<label htmlFor='login'>Login</label>
		</div>

		<div className='auth-form__row'>
			<Field
				component='input'
				type='password'
				name='password'
				id='password'
				required
			/>
			<label htmlFor='password'>Password</label>
		</div>
		<div className='auth-form__row'>
			<button type='submit' className='btn'>Log in &#10145;</button>
		</div>
	</form>
);

AuthorizationForm = reduxForm({ form: 'authorization' })( AuthorizationForm );

export default AuthorizationForm;