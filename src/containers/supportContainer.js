import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../actions';
import { SupportBlock } from '../components';

class SupportContainer extends Component {
	submit = ( data ) => {
		this.props.sendSupport(data);
	}

	render(){
		return <SupportBlock onSubmit={ this.submit } />
	}
};

const mapStateToProps = ( state ) => {
	return state
};

const mapDispatchToProps = ( dispatch ) => {
	return {
		sendSupport: (data) => dispatch( actions.sendSupport(data) )
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(SupportContainer);