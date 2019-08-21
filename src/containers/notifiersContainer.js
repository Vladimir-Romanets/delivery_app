import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../actions';
import { Notifiers } from '../components';

class NotifiersContainer extends Component{
	render(){
		const hasNote = this.props.list.length;
		return hasNote ? <Notifiers { ...this.props } /> : null;
	}
};

const mapStateToProps = state => ({
	...state.notifiers
});

const mapDispatchToProps = {
	notifierDelete: actions.notifierDelete
};

export default connect(mapStateToProps, mapDispatchToProps)(NotifiersContainer);