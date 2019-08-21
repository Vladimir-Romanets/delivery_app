import React, { PureComponent } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

const defineData = (value) => {
    let stringDate = '';
    if (!value) return null;

    if (/^\d{4}-\d{2}-\d{2}\s\d{2}:\d{2}:\d{2}$/.test(value)) {
        stringDate = moment(value, 'YYYY-MM-DD').format('DD-MM-YYYY');
    } else if (moment(value, 'DD/MM/YYYY').isValid()) {
        stringDate = moment(value, 'DD/MM/YYYY').format('DD-MM-YYYY');
    } else if (moment(value, 'DD-MM-YYYY').isValid()) {
        return moment(value);
    }
    return stringDate ? moment(stringDate, 'DD-MM-YYYY') : null;
}

class WrapperDatePicker extends PureComponent {
    constructor(props){
        super(props);
        this.state = {
            startDate: defineData(props.input.value)
        }
    }

    static getDerivedStateFromProps(prop, state){
        if (!prop.input.value && state.startDate !== prop.input.value) {
            return { startDate: null }
        }
        return null;
    }

    handleChange = (startDate) =>{
        const toFormat = !startDate ? null : startDate.format('DD-MM-YYYY');
        this.setState({startDate});
        this.props.input.onChange(toFormat);
    }


    render() {
        const { input, placeholder = '', meta: { touched, error } } = this.props;
        const { value, ...rest } = input;

        return (
            <div>
                <DatePicker
                    {...rest}
                    dateFormat="DD-MM-YYYY"
                    selected={this.state.startDate}
                    placeholderText={placeholder}
                    peekNextMonth
                    showMonthDropdown
                    showYearDropdown
                    dropdownMode="select"
                    fixedHeight
                    isClearable
                    autoComplete="off"
                    onChange={this.handleChange}
                />
                {touched && error && <span>{error}</span>}
            </div>
        )
    }
}

export default WrapperDatePicker;