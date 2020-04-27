import React from 'react';
import CouriersForm from './components/couriersForm';

export const EditBlock = ({ editingItem, couriersEditSave, couriersDelete, couriersEditReset }) => {
	const submitHandle = (data) => couriersEditSave(data);
	const deleteHandle = () => couriersDelete(editingItem.id);

	return (
		<div className='edit-block show'>
			<CouriersForm
				initialValues={editingItem}
				onSubmit={submitHandle}
				couriersEditReset={couriersEditReset}
				couriersDelete={deleteHandle}
				submitField={false}
				mngBtn
				form={'courier' + editingItem.id}
			/>
		</div>
	)
};