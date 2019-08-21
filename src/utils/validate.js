import React from 'react';

export const required = (value) => (value || value === 0) ? undefined : 'Required';

export const validateField = ({ input, placeholder, type, meta: { touched, error, warning } }) => {
	const className = touched && ( error || warning ) ? '--warning' : null;

	return (
		<input
			{ ...input }
			className={ className }
			placeholder={ placeholder }
			type={ type }
		/>
	)
};

export const validateSelectField = ({ input, children, meta: {touched, error, warning}, ...rest }) => {
	const className = touched && ( error || warning ) ? '--warning' : null;

	return (
		<select
			{ ...input }
			className={ className }
			children={ children }
		/>
	)
}; 