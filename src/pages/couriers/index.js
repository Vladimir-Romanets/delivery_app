import React, { Component } from 'react';
import { connect } from 'react-redux';

import { TableHeader } from './components/tableHeader';
import { TableBody } from './components/tableBody';
import { EditBlock } from './editBlock';
import CouriersForm from './components/couriersForm';
import ScrollTopHOC from '../../components/HOC';
import Paginavi from '../../components/pagination';
import {
	couriersGet,
	couriersAdd,
	couriersSearch,
	couriersEdit,
	couriersEditSave,
	couriersEditReset,
	couriersDelete,
	couriersReset
} from '../../actions';
import './style.css';

class Couriers extends Component {
	componentDidMount() {
		const { auth, list } = this.props;
		if (auth && list === null) {
			this.props.couriersGet({ page: 1 });
		}
	}

	componentWillUnmount() {
		this.props.couriersReset();
	}

	couriersAdd = (data) => this.props.couriersAdd(data)

	couriersSearch = (data) => this.props.couriersSearch(data)

	handlerPageChange = (pageObj) => this.props.couriersGet(pageObj)

	render() {
		const { list, editingItem, ...rest } = this.props;
		return (
			<div className='couriers'>
				<div className='table'>
					<TableHeader />
					<CouriersForm
						form='couriers'
						parentClass='table__row'
						onSubmit={this.couriersAdd}
						onChange={this.couriersSearch}
					/>
					<TableBody
						list={list}
						couriersEdit={rest.couriersEdit}
					/>
				</div>
				{
					editingItem ?
						<ScrollTopHOC>
							<EditBlock
								editingItem={editingItem}
								couriersEditSave={rest.couriersEditSave}
								couriersEditReset={rest.couriersEditReset}
								couriersDelete={rest.couriersDelete}
							/>
						</ScrollTopHOC> : null
				}
				<Paginavi handlerPageChange={this.handlerPageChange} />
			</div>
		);
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

export default connect(mapStateToProps, mapDispatchToProps)(Couriers);