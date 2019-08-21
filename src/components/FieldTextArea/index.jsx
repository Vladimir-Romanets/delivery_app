import React from 'react'
import classnames from 'classnames'

import './styles.css'

const FieldTextArea = ({ className, label, placeholder, input }) => (
    <div className={classnames('text-area-container', className)}>
        <label>{label}</label>
        <textarea {...input} placeholder={placeholder} className='text-area'/>
    </div>
);

FieldTextArea.defaultProps = {
    className: '',
    label: 'Примечание:',
    placeholder: ''
}
export default FieldTextArea