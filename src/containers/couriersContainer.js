import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../actions';
import { Couriers } from '../components';

const {
	couriersGet,
	couriersAdd,
	couriersSearch,
	couriersEdit,
	couriersEditSave,
	couriersEditReset,
	couriersDelete,
	couriersReset
} = actions;

class CouriersContainer extends Component{
	componentDidMount(){
		const { auth, list } = this.props;
		if ( auth && list === null ){
			this.props.couriersGet({ page: 1 });
		}
	}

	componentWillUnmount(){
		this.props.couriersReset();
	}

	render(){
		const { auth, ...rest } = this.props;
		return <Couriers { ...rest } />
	}
};

const mapStateToProps = state => ({
	auth: state.authorization.auth,
	...state.couriers
});

const mapDispatchToProps = {
	couriersGet,
	couriersAdd,
	couriersSearch,
	couriersEdit,
	couriersEditSave,
	couriersEditReset,
	couriersDelete,
	couriersReset
};

export default connect(mapStateToProps, mapDispatchToProps)(CouriersContainer);