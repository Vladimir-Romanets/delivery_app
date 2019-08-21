import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { mtModalInfoClear, getRouteSheet } from '../../../actions/masterTable';
import { IcoClose } from '../../icons';
import SimpleAutoComplete from '../../autoComplete/simpleAutoComplete';

const initState = {
    selectedIsValid: false,
    autosuggestField: '',
}

class ChangeCourier extends PureComponent {
    state = { ...initState }

    componentWillUnmount() {
        this.props.mtModalInfoClear({ entity: 'courier' });
    }

    handlerClose = (e) => {
        e.stopPropagation();
        const { onClose } = this.props;

        if (onClose) {
            onClose('courier');
        }
    }

    handleDownload = (e) => {
        e.preventDefault();
        this.props.getRouteSheet()
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

    handlerSubmit = () => {
        const { id, fio } = this.props.courier;
        this.props.onSubmit({ id, fio });
        this.setState({ ...initState });
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
        const { selectedIsValid } = this.state;
        const cn = `btn --save ${selectedIsValid ? '' : 'disabled'}`;

        return (
            <div className="modal-content">
                <div className="closeBtn" onClick={this.handlerClose}>
                    <IcoClose />
                </div>
                <div className="modal-content__header">
                    Установить для выбранных записей курьера?
                </div>
                <div className="flex-block">
                    <SimpleAutoComplete entity="courier" parentHandlerChange={this.handlerChange}/>
                </div>
                <div className="footnote">
                    { this.footnote() }
                </div>
                <div>
                    <a href="#" onClick={this.handleDownload}>Загрузить маршрутный лист</a>
                </div>
                <div className="modal-content__footer">
                    <button
                        className={cn}
                        onClick={this.handlerSubmit}
                        disabled={!selectedIsValid}
                    >Сохранить</button>
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
    getRouteSheet
};

export default connect(mapStateToProps, mapDispatchToProps)(ChangeCourier);
