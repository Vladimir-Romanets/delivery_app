import React from 'react';
import { connect } from 'react-redux';

import { notifierDelete }from '../actions';
import { Notifiers } from '../components';

const NotifiersContainer = (props) => {
	const hasNote = props.list && props.list.length;
	return hasNote ? <Notifiers { ...props } /> : null;
}

const mapStateToProps = ({ notifiers }) => ({
	...notifiers
});

const mapDispatchToProps = {
	notifierDelete
};

export default connect(mapStateToProps, mapDispatchToProps)(NotifiersContainer);