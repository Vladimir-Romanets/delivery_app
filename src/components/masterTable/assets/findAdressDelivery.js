import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import { mtModalInfoClear, findAddressDelivery } from '../../../actions/masterTable';
import { IcoClose } from '../../icons';
import SimpleAutoComplete from '../../autoComplete/simpleAutoComplete';

const initState = {
    selectedIsValid: false,
    autosuggestField: '',
    startDate: moment(),
}

class GenerateAdressDelivery extends PureComponent {
    state = { ...initState }

    componentWillUnmount() {
        this.props.mtModalInfoClear({ entity: 'courier' });
    }

    handlerClose = (e) => {
        e.stopPropagation();
        const { onClose } = this.props;

        if (onClose) onClose();
    }

    handlerChange = ({ value, isSelected = false }) => {
        const { courier } = this.props;

        if (isSelected){
            this.setState({
                selectedIsValid: true,
                autosuggestField: value
            });
        } else {
            this.setState({
                selectedIsValid: !!courier && courier.fio === value,
                autosuggestField: value
            });
        }
    }

    handlerDatePickerChange = (startDate) => this.setState({ startDate })

    handlerSubmit = () => {
        const { id } = this.props.courier;
        this.props.findAddressDelivery({
            courier_id: id,
            date: this.state.startDate.format('YYYY-MM-DD'),
        });
    }

    footnote = () => {
        const { selectedIsValid, autosuggestField } = this.state;
        if (!autosuggestField) return null;
        const color = selectedIsValid ? '--green' : '--red';

        return (
            <small className={color}>
                {`${selectedIsValid ? 'Курьер найден' : 'Курьер не найден'}`}
            </small>
        )
    }

    render() {
        const { selectedIsValid, startDate } = this.state;
        const isValid = selectedIsValid && startDate;
        const cn = `btn --save ${isValid ? '' : 'disabled'}`;

        return (
            <div className="modal-content">
                <div className="closeBtn" onClick={this.handlerClose}>
                    <IcoClose />
                </div>
                <div className="modal-content__header">
                    Найти адреса доставок.
                </div>
                <div className="flex-block">
                    <SimpleAutoComplete entity="courier" parentHandlerChange={this.handlerChange}/>
                    <DatePicker
                        dateFormat="DD-MM-YYYY"
                        selected={startDate}
                        peekNextMonth
                        showMonthDropdown
                        showYearDropdown
                        dropdownMode="select"
                        fixedHeight
                        isClearable
                        autoComplete="off"
                        onChange={this.handlerDatePickerChange}
                    />
                </div>
                <div className="footnote">
                    { this.footnote() }
                </div>
                <div className="modal-content__footer">
                    <button
                        className={cn}
                        onClick={this.handlerSubmit}
                        disabled={!isValid}
                    >Поиск</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ masterTable: { modalInfo } }) => ({
    courier: modalInfo.courier,
});

const mapDispatchToProps = {
    mtModalInfoClear,
    findAddressDelivery
};

export default connect(mapStateToProps, mapDispatchToProps)(GenerateAdressDelivery);
