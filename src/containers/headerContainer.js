import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMainHeader, logout, getShortStatistic } from '../actions';
import { Header } from '../components';

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