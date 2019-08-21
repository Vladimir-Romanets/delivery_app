import React, { Component } from 'react';
import moment from 'moment';
import TableHeader from './tableHeader';
import TableBody from './tableBody';
import SearchForm from './searchForm';
import { Assets } from './assets';
import AdditionalMenu from './additionalMenu';
import MasterTableAddEntity from '../masterTableAddEntity';
import ScrollTopHOC from '../HOC/index';
import FindAdressDelivery from './assets/findAdressDelivery';
import { tableFields } from '../../utils/masterTableFormater';
import Paginavi from '../pagination';
import Modal from '../modal';

import './style.css';
import 'react-datepicker/dist/react-datepicker.css';

const methodsArr = ['asc', 'desc']; // Filter methods [A->Z, Z->A]
const intlCompare = new Intl.Collator();
const toDateObj = str => {
	if (!str) return 0;
	const arr = str.split('-');
	return +(new Date(+arr[2], arr[1] - 1, +arr[0]));
}

const orderBy = (tableEntry, field, methods) => {
	if (!tableEntry) return null;
	return tableEntry.sort((a, b) => {
		const valA = a[field] === undefined || a[field] === null ? '' : a[field];
		const valB = b[field] === undefined || b[field] === null ? '' : b[field];
		let sign = 0;
		if (field === 'dateRecive' || field === 'dateSend') {
			sign = toDateObj(valA) - toDateObj(valB);
		} else if (isNaN(valA) || isNaN(valB)) {
			const a = valA.toString().trim();
			const b = valB.toString().trim();
			sign = intlCompare.compare(a, b);
		} else {
			sign = valA - valB;
		}
		return methods === methodsArr[0] ? sign : -sign;
	});
}

const initialValues = {
	dateSendFrom: moment().startOf('month').format('DD-MM-YYYY')
}

export default class MasterTable extends Component {
	constructor (props) {
		super (props);
		this.state = {
			showModal: false,
			add: false,
			filterField: 'dateSend',
			filterMethod: 1,
		};
	}

	handlerTogglePortal = (showModal = false) => this.setState({ showModal })

	componentDidMount() {
		const search = { ...initialValues }
		this.getTableEntry({ search });
	}

	getTableEntry = ({ service_id = this.props.currentServ, pageObj = { page: 1 }, search }) => {
		const data = {
			service_id,
			search,
			...pageObj
		};
		if (!search) delete data.search;
		this.props.masterTableGetEntry(data);
	}

	addClickHandler = () => {
		const add = !this.state.add;
		add && this.props.mtEditableEntryClose();
		this.setState({ add });
	}

	closeAddForm = () => {
		this.setState({ add: false });
	}

	servChangeHandler = ({ target }) => {
		const service_id = Number(target.value);
		this.props.mtChangeService({ currentServ: service_id });
		this.getTableEntry({ service_id });
	}

	dblClickHeandler = (id) => {
		this.setState({ add: false });
		this.props.mtFetchEntryID({id});
	}

	handlerPageChange = pageObj => this.getTableEntry({pageObj})

	searchFormChange = () => {
		this.props.mtEntrySearch({ service_id: this.props.currentServ });
	}

	setFilter = (field) => this.setState(({ filterField, filterMethod }) => ({
		filterField: field,
		filterMethod: filterField === field  ? ++filterMethod % 2 : 0
	}))

	render(){
		const {
			tableHeader,
			tableEntry,
			editingItem,
			services,
			mtEntrySearch,
			mtSelectItem,
			checkAllItems,
			checkedList,
			mtSelectAllItem,
			currentServ,
			...rest
		} = this.props;
		const { add, showModal, filterField, filterMethod } = this.state;
		const fields = tableFields(currentServ);
		const methods = methodsArr[filterMethod];
		const tableRow = methods ? orderBy(tableEntry, filterField, methods) : tableEntry;

		return (
			<div className='master-table' data-add-show={ add } >
				<Assets
					currentServ={ currentServ }
					services={ services }
					servChangeHandler={ this.servChangeHandler }
					addClickHandler={ this.addClickHandler }
				/>

				{
					this.state.add ?
						<ScrollTopHOC>
							<MasterTableAddEntity
								currentServ={currentServ}
								services={services}
								servicesIsActive
								closeAddForm={this.closeAddForm}
							/>
						</ScrollTopHOC> : null
				}

				<div className='table' data-service={ currentServ } >
					<TableHeader
						tableHeader={tableHeader}
						fields={fields}
						mtSelectAllItem={mtSelectAllItem}
						checkAllItems={checkAllItems}
						setFilter={this.setFilter}
						filterMethod={methods}
						filterField={filterField}
					/>
					<SearchForm
						form='searchForm'
						parentClass='table__row search'
						fields={fields}
						onChange={this.searchFormChange}
						initialValues={initialValues}
					/>
					<TableBody
						list={ tableRow }
						dblClickHeandler={ this.dblClickHeandler }
						fields={fields}
						mtSelectItem={mtSelectItem}
						checkedList={checkedList}
				/>
				</div>
				{
					editingItem ?
						<ScrollTopHOC>
							<MasterTableAddEntity 
								initialValues={ editingItem }
								currentServ={ currentServ }
								services={ services }
								servicesIsActive={ false }
								submitHandler={ rest.mtEditableEntrySave }
								closeAddForm={ rest.mtEditableEntryClose }
								deleteHandler={ rest.mtEditableEntryDelete }
							/>
						</ScrollTopHOC> : null
				}
				<Paginavi handlerPageChange={this.handlerPageChange}/>

				<AdditionalMenu checkedList={checkedList}/>

				{
					showModal ?
						<Modal onClose={this.handlerTogglePortal}>
							efsdfdsfdsf
							<FindAdressDelivery
								onClose={this.handlerTogglePortal}
							/>
						</Modal> : null
				}
			</div>
		)
	}
};
