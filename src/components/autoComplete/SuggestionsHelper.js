import React from 'react';

export const SuggestionsList = (suggestion) => (
	<div>{getSuggestionValue(suggestion)}</div>
)

export const getSuggestionValue = ({ contact_name, clients_name, fio }) => {
	const name = contact_name || clients_name || fio || '';
	return name;
}