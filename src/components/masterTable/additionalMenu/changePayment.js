import React, { PureComponent } from 'react';
import { paymentSelect } from '../../common';
import { IcoClose } from '../../icons';

class ChangePayment extends PureComponent{
    state = {
        status_coming: null,
        status_consumption: null,
        pending: false,
    }

    handlerClose = (e) => {
        e.stopPropagation();
        if (this.props.onClose) this.props.onClose('payment');
    }

    handlerChange = ({target}) => {
        const { name, value } = target;
        if (name in this.state) {
            this.setState({ [name]: Number(value) });
        }
    }

    handlerSubmit = () => {
        const { status_coming , status_consumption, pending } = this.state;
        if (!pending && (status_coming != null || status_consumption != null)) {
            this.setState({ pending: true });
            this.props.onSubmit({ status_coming, status_consumption });
        }
    }

    render() {
        const { status_coming, status_consumption, pending } = this.state;
        const pristine = (status_coming != null || status_consumption != null) && !pending ? '' : 'disabled';

        return (
            <div className="modal-content">
                <div className="closeBtn" onClick={this.handlerClose}>
                    <IcoClose />
                </div>
                <div className="modal-content__header">
                    Установить для выбранных записей оплату?
                </div>
                <div className="flex-block">
                    <div className="flex-block__item">
                        <p>Оплата (Приход):&nbsp;</p>
                        {
                            paymentSelect({ name: 'status_coming', onChange: this.handlerChange, emptyOption: true })
                        }
                    </div>
                    <div className="flex-block__item">
                        <p>Оплата (Расход):&nbsp;</p>
                        {
                            paymentSelect({ name: 'status_consumption', onChange: this.handlerChange, emptyOption: true })
                        }
                    </div>
                </div>
                <div className="modal-content__footer">
                    <span className={`btn --save ${pristine}`} onClick={this.handlerSubmit}>Сохранить</span>
                </div>
            </div>
        )
    }
}

export default ChangePayment;
