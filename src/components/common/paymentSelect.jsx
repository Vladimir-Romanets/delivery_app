import React from 'react'

const paymentSelect = (props) => {
    const { name, onChange = null, input = {}, emptyOption } = props;
    const fieldName = name || input.name;

    return (
        fieldName ?
            <select name={fieldName} onChange={onChange} {...input}>
                {
                    emptyOption ? <option value/> : null
                }
                <option value={0}>Нет</option>
                <option value={2}>Есть</option>
                <option value={1}>Частично</option>
                <option value={3}>Внимание</option>
            </select> : null
    )
};

export default paymentSelect;