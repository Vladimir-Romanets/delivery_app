import React from 'react';
import { createPortal } from 'react-dom';
import './style.css';

const modalRoot = document.getElementById('root-modal');

class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.container = document.createElement('div');
    }
    handlerClose = ({ target }) => {
        if (target && target.id === 'root-modal') {
            this.props.onClose && this.props.onClose(false);
        }
    }

    componentDidMount() {
        modalRoot.appendChild(this.container);
        modalRoot.classList.add('show');
        modalRoot.addEventListener('click', this.handlerClose, false);
    }

    componentWillUnmount() {
        modalRoot.removeChild(this.container);
        modalRoot.classList.remove('show');
        modalRoot.removeEventListener('click', this.handlerClose, false);
    }

    render() {
        return createPortal(
            this.props.children,
            this.container,
        );
    }
}

export default Modal;
