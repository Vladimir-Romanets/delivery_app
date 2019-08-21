import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import size from 'lodash/size';

import {
    groupPaymentChange,
    groupCourierChange,
    groupDateChange,
    mtSelectAllItem,
    getRouteSheet
} from '../../../actions/masterTable';
import Modal from '../../modal';
import ico from '../../icons/menu.svg';
import ChangePayment from './changePayment';
import ChangeCourier from './changeCourier';
import ChangeDate from './changeDate';
import './style.css';

const initState = {
    payment: false,
    courier: false,
    sendDate: false
};

const findKey = (obj) => Object.keys(obj).find(key => obj[key]) || null;

class AdditionalMenu extends PureComponent {

    state = { ...initState }

    clickHandler = (key) => {
        this.setState({ ...initState, [key]: true });
    }

    handlerClosePortal = (key) => {
        if (key === false) {
            this.setState({ ...initState })
        } else {
            this.setState((state) => ({ [key]: !state[key] }));
        }
        this.props.mtSelectAllItem(false);
    }

    renderModalItem = (key) => {
        switch(key) {
            case 'payment': 
                return <ChangePayment
                    onClose={this.handlerClosePortal}
                    onSubmit={this.props.groupPaymentChange}
                />
            case 'courier':
                return <ChangeCourier
                    onClose={this.handlerClosePortal}
                    onSubmit={this.props.groupCourierChange}
                />
            case 'sendDate':
                return <ChangeDate
                    onClose={this.handlerClosePortal}
                    onSubmit={this.props.groupDateChange}
                />
            default:
                return null;
        } 
    }

    render() {
        const { checkedList, getRouteSheet } = this.props;
        const isMenuShow = size(checkedList);
        const trueKey = findKey(this.state);

        return isMenuShow ?
            (
                <div className="additional-menu-container">
                    <div className="additional-menu__ico"><img src={ico} alt=''/></div>
                    <ul className="additional-menu">
                        <li className="additional-menu__item" onClick={() => this.clickHandler('payment')}>Изменить оплату</li>
                        <li className="additional-menu__item" onClick={() => this.clickHandler('sendDate')}>Назначить дату получения</li>
                        <li className="additional-menu__item" onClick={() => this.clickHandler('courier')}>Назначить курьера</li>
                        <li className="additional-menu__item" onClick={getRouteSheet}>Скачать маршрутный лист</li>
                    </ul>

                    {
                        trueKey ?
                            <Modal onClose={this.handlerClosePortal}>
                                {this.renderModalItem(trueKey) }
                            </Modal> : null
                    }

                </div>
            ) : null
    }
}

const mapDispatchToProps = {
    groupPaymentChange,
    groupCourierChange,
    groupDateChange,
    mtSelectAllItem,
    getRouteSheet
}

export default connect(null, mapDispatchToProps)(AdditionalMenu);
