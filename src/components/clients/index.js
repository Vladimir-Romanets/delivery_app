import React, { Component } from 'react';
import ScrollTopHOC from '../HOC/index';
import ClientsForm from './clientsForm';
import { TableHeader } from './tableHeader';
import { TableBody } from './tableBody';
import { EditBlock } from './editBlock';
import Paginavi from '../pagination';
import './style.css';

class Clients extends Component {

	clientsAdd = (data) => this.props.clientsAdd(data)

	clientsSearch = (data) => this.props.clientsSearch(data)

	handlerPageChange = (pageObj) => this.props.clientsGet(pageObj)

	render() {
		const { list, editingItem, ...rest } = this.props;
		return(
			<div className='clients'>
				<div className='table'>
					<TableHeader />
					<ClientsForm
						parentClass='table__row'
						onSubmit={ this.clientsAdd }
						onChange={ this.clientsSearch }
						noteField={ false }
						mngBtn={ false }
						form='ClientsForm'
					/>
					<TableBody
						list={ list }
						clientsEdit={ rest.clientsEdit }
					/>
				</div>
				{
					editingItem ?
						<ScrollTopHOC>
							<EditBlock
								editingItem={editingItem}
								clientsEditReset={rest.clientsEditReset}
								clientsEditSave={rest.clientsEditSave}
								clientsDelete={rest.clientsDelete}
							/>
						</ScrollTopHOC> : null
				}
				<Paginavi handlerPageChange={this.handlerPageChange}/>
			</div>
		)
	}
};

export default Clients;