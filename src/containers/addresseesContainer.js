import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
	addresseesGet,
	addresseesAdd,
	addresseesSearch,
	addresseesEdit,
	addresseesEditSave,
	addresseesDelete,
	addresseesEditReset,
	addresseesReset
} from '../actions';
import { Addressees } from '../components';

class AddresseesContainer extends Component{

	componentDidMount(){
		const { auth, list } = this.props;
		if ( auth && list === null ){
			this.props.addresseesGet({ page: 1 });
		}
	}

	componentWillUnmount(){
		this.props.addresseesReset();
	}

	render(){
		const { auth, ...rest } = this.props;
		return <Addressees { ...rest } />
	}
};

const mapStateToProps = state => ({
	auth: state.authorization.auth,
	...state.addressees
});

const mapDispatchToProps = {
	addresseesGet,
	addresseesAdd,
	addresseesSearch,
	addresseesEdit,
	addresseesEditSave,
	addresseesDelete,
	addresseesEditReset,
	addresseesReset
};

export default connect(mapStateToProps, mapDispatchToProps)(AddresseesContainer);