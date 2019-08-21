import React, { PureComponent } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { IcoClose } from '../../icons';

class ChangeDate extends PureComponent {
    state = {
        currentDate: moment(),
    }

    handlerClose = (e) => {
        e.stopPropagation();
        if (this.props.onClose) this.props.onClose('sendDate');
    }

    handleChange = currentDate => this.setState({ currentDate })

    handlerSubmit = () => {
        const { currentDate } = this.state;
        const date = !currentDate ? null : currentDate.format('DD-MM-YYYY');
        this.props.onSubmit({ date });
    }

    render() {
        const { currentDate } = this.state;

        return (
            <div className="modal-content --top">
                <div className="closeBtn" onClick={this.handlerClose}>
                    <IcoClose />
                </div>
                <div className="modal-content__header">
                    Установить для выбранных записей дату получения?
                </div>
                <div className="flex-block">
                    <p>Дата получения:&nbsp;</p>
                    <DatePicker
                        dateFormat="DD-MM-YYYY"
                        selected={currentDate}
                        peekNextMonth
                        showMonthDropdown
                        showYearDropdown
                        dropdownMode="select"
                        fixedHeight
                        isClearable
                        autoComplete="off"
                        onChange={this.handleChange}
                    />
                </div>
                <div className="modal-content__footer">
                    <span className="btn --save" onClick={this.handlerSubmit}>Сохранить</span>
                </div>
            </div>
        )
    }
}

export default ChangeDate;
