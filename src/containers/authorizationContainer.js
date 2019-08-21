import React from 'react';
import { connect } from 'react-redux';
import actions from '../actions';
import { AuthorizationForm } from '../components';

const AuthorizationContainer = ({ auth, fetchAuthData }) => {
	const submit = data => {
		fetchAuthData(data);
	}

	return !auth ? <AuthorizationForm
		onSubmit={ submit }
		parentClassName={ auth === false ? ' wrong-auth' : '' } /> : null
};

const mapStateToProps = state => ({
	auth: state.authorization.auth
});

const mapDispatchToProps = {
		fetchAuthData: actions.fetchAuthData
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthorizationContainer);