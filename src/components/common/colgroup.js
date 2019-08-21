import React from 'react';
import PropTypes from 'prop-types';

export const Colgroup = ({parentClassName='', text='...'}) => (
	<div className={`colgroup text-center ${parentClassName}`}>
		{ text }
	</div>
);

PropTypes.Colgroup = {
	parentClassName: PropTypes.string,
	text: PropTypes.string
};