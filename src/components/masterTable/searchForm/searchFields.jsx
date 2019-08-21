import React from 'react';
import { Field } from 'redux-form';
import WrapperDatePicker from '../assets/datePicker';

const searchFields = {
    contract_id: (key) => (
        <div className='table__cell' key={key}>
            <Field
                component='input'
                type='text'
                name='contract_id'
                placeholder=''
            />
        </div >
    ),
    invoice: (key) => (
        <div className='table__cell' key={key}>
            <Field
                component='input'
                type='text'
                name='invoice'
                placeholder=''
            />
        </div >
    ),
    client: (key) => (
        <div className='table__cell' key={key}>
            <Field
                component='input'
                type='text'
                name='client'
                placeholder=''
            />
        </div >
    ),
    sender: (key) => (
        <div className='table__cell' key={key}>
			<Field
                component='input'
                type='text'
                name='sender'
                placeholder=''
            />
        </div>
    ),
    recipient: (key) => (
        <div className='table__cell' key={key}>
            <Field
                component='input'
                type='text'
                name='recipient'
                placeholder=''
            />
        </div>
    ),
    address: (key) => (
        <div className='table__cell' key={key}>
            <Field
                component='input'
                type='text'
                name='address'
                placeholder=''
            />
        </div>
    ),
    dateSend: (key) => (
        <div className='table__cell' key={key}>
            <label>
				<Field
                    component={WrapperDatePicker}
                    placeholder='от:'
                    name='dateSendFrom'
                />
            </label>
            <label>
				<Field
                    component={WrapperDatePicker}
                    placeholder='до:'
                    name='dateSendTo'
                />
            </label>
        </div>
    ),
    dateRecive: (key) => (
        <div className='table__cell' key={key}>
            <label>
				<Field
                    component={WrapperDatePicker}
                    placeholder='от:'
                    name='dateReciveFrom'
                />
            </label>
            <label>
				<Field
                    component={WrapperDatePicker}
                    placeholder='до:'
                    name='dateReciveTo'
                />
            </label>
        </div>
    ),
    courier: (key) => (
        <div className='table__cell' key={key}>
            <Field
                component='input'
                type='text'
                name='courier'
                placeholder=''
            />
        </div>
    ),
    shipmentType: (key) => (
        <div className='table__cell' key={key}>
            <Field
                name="shipmentType"
                component="select" >
                <option></option>
                <option value={1}>Эконом</option>
                <option value={2}>Экспресс</option>
                <option value={3}>Специальное</option>
                <option value={4}>Разовая</option>
                <option value={5}>Ячейка</option>
            </Field>
        </div>
    ),
    paymentType: (key) => (
        <div className='table__cell' key={key}>
            <Field name="paymentType" component="select">
                <option></option>
                <option value={1}>Наличный</option>
                <option value={2}>Безналичный</option>
            </Field>
        </div>
    )
}

export default searchFields;
