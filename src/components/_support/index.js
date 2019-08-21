import React from 'react';
import { Field, reduxForm } from 'redux-form';

import './style.css';

let SupportBlock = ( props ) => {
	const { handleSubmit } = props;
	return (
		<form onSubmit={ handleSubmit } className="_support">

			<div className="_support__cell">
				<label htmlFor="route">Route</label>
				<Field
					component="input"
					type="text"
					name="route"
					id="route"
				/>
			</div>

			<div className="_support__cell">
				<label htmlFor="val">Values</label>
				<Field
					component="input"
					type="text"
					name="val"
					id="val"
				/>
			</div>
			<div>
				<button type="submit">Send route</button>
			</div>
		</form>
	)
};

SupportBlock = reduxForm({ form: 'supportblock' })( SupportBlock );

export default SupportBlock;