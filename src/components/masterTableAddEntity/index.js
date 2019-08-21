import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import { mtEntityAdd } from '../../actions/masterTableEntity';
import { SelectService } from '../masterTable/selectService';
import AddEntityForm from './addEntityForm';
import { ServiseNotSelected } from './serviseNotSelected';
import { FieldGroupNavigation } from './fieldGroupNavigation';
import './style.css';

class MasterTableAddEntity extends Component {
	constructor(props){
		super(props);
		this.state = {
			currentServ: Number(this.props.currentServ) || 1,
			navSelected: 0,
			isWide: false
		}
	}

	componentDidMount() {
		window.addEventListener("resize", this.widthMeasuring);
		this.widthMeasuring();
	}

	componentWillUnmount() {
		window.removeEventListener("resize", this.widthMeasuring);
	}

	widthMeasuring = () => {
		const isWide = window.innerWidth >= 1400;

		if (this.state.isWide !== isWide){
			this.setState({isWide});
		}
	}

	servChangeHandler = ({target}) => {
		const currentServ = +target.value;
		this.setState({
			currentServ,
			navSelected: 0
		});
	}

	navClickHandler = (navSelected) => this.setState({navSelected})

	submitHandler = (data, ...rest) => {
		const { pristine } = rest[1];

		if (pristine) return null;
		if ('submitHandler' in this.props){
			data.currentServ = this.props.currentServ;
			this.props.submitHandler(data)
		} else {
			const payload = { ...data, closeAddForm: this.props.closeAddForm}
			this.props.mtEntityAdd(payload)
		}
	}

	deleteHandler = () => {
		const deletingEntity = {
			id: this.props.initialValues.id,
			service: this.props.currentServ
		};

		if (deletingEntity.id) {
			this.props.deleteHandler(deletingEntity);
		};
	}

	render(){
		const { currentServ, navSelected, isWide } = this.state;
		const { servicesIsActive, services } = this.props;
		const serv = services.filter(({id})=>id !== 0);
		const initialValues = this.props.initialValues || {
			id: null,
			service: currentServ,
			operator: this.props.operator,
			creationDate: ( new Date() ).toLocaleDateString(),
			keeping: {
				storageType: "1"
			},
			sender: {
				statusUpdateSender: false
			},
			recepient: {
				statusUpdateRecepient: false
			},
			docservice: {
				storageType: "1"
			},
			deliveryAssets:{
				shipmentType: 1,
				statusTakeShipment: "0",
				statusReturnShipment: "0",
				sendDate: moment().format("DD-MM-YYYY"),
			},
			deliveryRFAssets: {
				shipmentType: 4
			},
			finances: {
				paymantType: 1,
				status_coming: 0,
				status_consumption: 0,
				income: 0,
				expense: 0,
			}
		};

		return (
			<div className='addEntity' ref={this.component}>
				<div className='navigation'>
				{
					servicesIsActive ?
					<SelectService
						defaultValue={ currentServ }
						changeHandler={ this.servChangeHandler }
						services={ serv }
					/> : null
				}
					<FieldGroupNavigation
						currentServ={ currentServ }
						navSelected={ navSelected }
						navClickHandler={ this.navClickHandler }
					/>
				</div>
				{
					currentServ ?
					<AddEntityForm
						form='addEntityForm'
						parentClass={ isWide ? 'all-visible' : '' }
						onSubmit={ this.submitHandler }
						currentServ={ initialValues.service }
						navSelected={ navSelected }
						initialValues={ initialValues }
						closeAddForm={ this.props.closeAddForm }
						deleteHandler={ initialValues.id ? this.deleteHandler : null }
						isWide={ isWide }
					/> :
					<ServiseNotSelected />
				}
			</div>
		)
	}
};

const mapStateToProps = (state) => ({
	operator: state.authorization.login,
});

const mapDispatchToProps = {
	mtEntityAdd
};

export default connect(mapStateToProps, mapDispatchToProps)(MasterTableAddEntity);