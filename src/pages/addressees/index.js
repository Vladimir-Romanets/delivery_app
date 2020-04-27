import React, { Component } from 'react'
import { connect } from 'react-redux'

import { TableBody } from './components/tableBody'
import { TableHeader } from './components/tableHeader'
import { EditBlock } from './editBlock'
import AddresseesForm from './components/addresseesForm'
import ScrollTopHOC from '../../components/HOC'
import Paginavi from '../../components/pagination'
import {
	addresseesGet,
	addresseesAdd,
	addresseesSearch,
	addresseesEdit,
	addresseesEditSave,
	addresseesDelete,
	addresseesEditReset,
	addresseesReset
} from '../../actions'
import './style.css'

class Addressees extends Component {

	componentDidMount() {
		const { auth, list } = this.props;
		if (auth && list === null) {
			this.props.addresseesGet({ page: 1 });
		}
	}

	componentWillUnmount() {
		this.props.addresseesReset();
	}

	addresseesAdd = (data) => this.props.addresseesAdd(data)

	addresseesSearch = (data) => this.props.addresseesSearch(data)

	handlerPageChange = (pageObj) => this.props.addresseesGet(pageObj)

	render() {
		const { list, ...rest } = this.props

		return (
			<div className='addressees'>
				<div className='table'>
					<TableHeader />
					<AddresseesForm
						parentClass='table__row'
						onSubmit={this.addresseesAdd}
						onChange={this.addresseesSearch}
						noteField={false}
						mngBtn={false}
						form='AddresseesForm'
					/>
					<TableBody
						list={list}
						addresseesEdit={rest.addresseesEdit}
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
				<Paginavi handlerPageChange={this.handlerPageChange} />
			</div>
		)
	}
}

const mapStateToProps = state => ({
	auth: state.authorization.auth,
	...state.addressees
});

const mapDispatchToProps = {
	addresseesGet,
	addresseesAdd,
	addresseesSearch,
	addresseesEdit,
	addresseesEditSave,
	addresseesDelete,
	addresseesEditReset,
	addresseesReset
};

export default connect(mapStateToProps, mapDispatchToProps)(Addressees)