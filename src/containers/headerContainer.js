import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Header } from '../components';

const { getMainHeader, logout, getShortStatistic } = actions;

class HeaderContainer extends Component {
	componentDidMount(){
		const { auth, getMainHeader, getShortStatistic } = this.props;
		if(auth){
			getMainHeader();
			getShortStatistic();
		}
	}

	render(){
		return  <Header {...this.props } />
	}
};

const mapStateToProps = ( state ) => ({
	...state.authorization,
	...state.header,
	...state.router,
	shortStatistic: state.statistic.shortStatistic
});

const mapDispatchToProps = {
	getShortStatistic,
	getMainHeader,
	logout
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);