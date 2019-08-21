import React, { Fragment } from 'react';
import { Field } from 'redux-form';

import WrapperDatePicker from '../masterTable/assets/datePicker';
import { required } from '../../utils/validate';

export const DatesDetail = () => (
    <Fragment>
        <div className="formgroup__title">
            Детали отправления
        </div>

        <div className='formgroup__cell'>
            <label>Дата&nbsp;отправки:&nbsp;</label>
            <Field
                component={WrapperDatePicker}
                validate={[required]}
                name='sendDate'
            />
        </div>

        <div className='formgroup__cell'>
            <label>Дата&nbsp;получения:&nbsp;</label>
            <Field
                component={WrapperDatePicker}
                name='recepientDate'
            />
        </div>
    </Fragment>
)