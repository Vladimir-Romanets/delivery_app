import React from 'react';
import ClientsForm from './components/clientsForm';

export const EditBlock = ({ editingItem, clientsEditSave, clientsDelete, clientsEditReset }) => {
	const submitHandle = (data) => clientsEditSave(data);
	const deleteHandle = () => clientsDelete(editingItem.id);

	return (
		<div className='edit-block show'>
			<ClientsForm
				initialValues={editingItem}
				onSubmit={submitHandle}
				clientsEditReset={clientsEditReset}
				clientsDelete={deleteHandle}
				submitField={false}
				mngBtn
				form={'client' + editingItem.id}
			/>
		</div>
	)
};