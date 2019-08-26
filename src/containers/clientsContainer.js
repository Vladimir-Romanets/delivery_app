import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
	clientsGet,
	clientsAdd,
	clientsSearch,
	clientsEdit,
	clientsEditReset,
	clientsEditSave,
	clientsDelete,
	clientsReset
} from '../actions';
import Clients from '../pages/clients';

class ClientsContainer extends Component{
	componentDidMount(){
		const { auth, list } = this.props;
		if ( auth && list === null ){
			this.props.clientsGet({ page: 1 });
		}
	}

	componentWillUnmount(){
		this.props.clientsReset();
	}

	render(){
		const { auth, ...rest } = this.props;
		return <Clients { ...rest } />
	}
};

const mapStateToProps = state => ({
	auth: state.authorization.auth,
	...state.clients
});

const mapDispatchToProps = {
	clientsGet,
	clientsAdd,
	clientsSearch,
	clientsEdit,
	clientsEditReset,
	clientsEditSave,
	clientsDelete,
	clientsReset
};

export default connect(mapStateToProps, mapDispatchToProps)(ClientsContainer);