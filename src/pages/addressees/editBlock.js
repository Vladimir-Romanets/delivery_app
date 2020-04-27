import React from 'react';
import AddresseesForm from './components/addresseesForm';

export const EditBlock = ({ editingItem, addresseesEditSave, addresseesDelete, addresseesEditReset }) => {
	const submitHandle = (data) => addresseesEditSave(data);
	const deleteHandle = () => addresseesDelete(editingItem.id);

	return (
		<div className='edit-block show'>
			<AddresseesForm
				initialValues={editingItem}
				onSubmit={submitHandle}
				addresseesDelete={deleteHandle}
				submitField={false}
				addresseesEditReset={addresseesEditReset}
				form={String(editingItem.id)}
			/>
		</div>
	);
};