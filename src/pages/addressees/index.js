import React, { Component } from 'react';

import { TableBody } from './tableBody';
import { TableHeader } from './tableHeader';
import { EditBlock } from './editBlock';
import AddresseesForm from './addresseesForm';
import ScrollTopHOC from '../../components/HOC';
import Paginavi from '../../components/pagination';
import './style.css';

class Addressees extends Component {

	addresseesAdd = (data) => this.props.addresseesAdd(data)

	addresseesSearch = (data) => this.props.addresseesSearch(data)

	handlerPageChange = (pageObj) => this.props.addresseesGet(pageObj)

	render() {
		const { list, ...rest } = this.props;

		return(
			<div className='addressees'>
				<div className='table'>
					<TableHeader />
					<AddresseesForm
						parentClass='table__row'
						onSubmit={ this.addresseesAdd }
						onChange={ this.addresseesSearch }
						noteField={ false }
						mngBtn={ false }
						form='AddresseesForm'
					/>
					<TableBody
						list={ list }
						addresseesEdit={ rest.addresseesEdit }
					/>
				</div>
				{
					rest.editingItem ?
						<ScrollTopHOC>
							<EditBlock
								editingItem={rest.editingItem}
								addresseesEditSave={rest.addresseesEditSave}
								addresseesDelete={rest.addresseesDelete}
								addresseesEditReset={rest.addresseesEditReset}
							/>
						</ScrollTopHOC> : null
				}
				<Paginavi handlerPageChange={this.handlerPageChange}/>
			</div>
		)
	}
};

export default Addressees;