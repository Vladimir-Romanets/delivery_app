import React, { PureComponent } from 'react';

class Checkbox extends PureComponent {
    state = {
        isChecked: this.props.isChecked,    
    }

    static getDerivedStateFromProps(props, state){
        if (props.isChecked !== state.isChecked){
            return {
                isChecked: props.isChecked,
            }
        }
        return null;
    }

    handlerChengeCheckbox = ({ target }) => {
        this.props.mtSelectItem({ [target.name]: target.checked });
    }

    render(){
        const { isChecked } = this.state;

        return <input
            type="checkbox"
            name={this.props.name}
            checked={isChecked}
            onChange={this.handlerChengeCheckbox}
        />
    }
}

export default Checkbox;
