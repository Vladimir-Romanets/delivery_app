import React, { Component } from 'react';

import ScrollTopHOC from '../../components/HOC';
import Paginavi from '../../components/pagination';
import { TableHeader } from './tableHeader';
import { TableBody } from './tableBody';
import { EditBlock } from './editBlock';
import CouriersForm from './couriersForm';
import './style.css';

class Couriers extends Component {

	couriersAdd = (data) => this.props.couriersAdd(data)

	couriersSearch = (data) => this.props.couriersSearch(data)

	handlerPageChange = (pageObj) => this.props.couriersGet(pageObj)

	render() {
		const { list, editingItem, ...rest } = this.props;
		return(
			<div className='couriers'>
				<div className='table'>
					<TableHeader />
					<CouriersForm
						form='couriers'
						parentClass='table__row'
						onSubmit={ this.couriersAdd }
						onChange={ this.couriersSearch }
					/>
					<TableBody
						list={ list }
						couriersEdit={ rest.couriersEdit }
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
				<Paginavi handlerPageChange={this.handlerPageChange}/>
			</div>
		);
	}
};

export default Couriers;