import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import { connect } from 'react-redux';

import ReturnFieldsGroup from './returnFieldsGroup';

class ServiceDeliveryFieldsAdditional extends PureComponent {

	static propTypes = {
		takeStatust: PropTypes.string.isRequired,
		returnStatus: PropTypes.string.isRequired
	}

	render() {
		const { returnStatus, takeStatust } = this.props;

		return (
			<Fragment>
				<div className='formgroup__cell'>
					<div className='left-side'>
						<div>Забор отправки:&nbsp;</div>
						<label>
							Да:
							<Field
								name="statusTakeShipment"
								component="input"
								type="radio"
								value="1"
							/>
						</label>
						<label>
							Нет
							<Field
								name="statusTakeShipment"
								component="input"
								type="radio"
								value="0"
							/>
						</label>
					</div>
					<div className='right-side full-width'>
						{
							takeStatust === "1" ? <ReturnFieldsGroup name='takeShipment' /> : null
						}
					</div>
				</div>
				<div className='formgroup__cell'>
					<div className='left-side'>
						<div>Возврат:&nbsp;</div>
						<label>
							Да:
							<Field
								name="statusReturnShipment"
								component="input"
								type="radio"
								value="1"
							/>
						</label>
						<label>
							Нет
							<Field
								name="statusReturnShipment"
								component="input"
								type="radio"
								value="0"
							/>
						</label>
					</div>
					<div className='right-side full-width'>
						{
							returnStatus === "1" ? <ReturnFieldsGroup name='returnShipment' /> : null
						}
					</div>
				</div>
			</Fragment>
		)
	}
}

const mapStateToProps = ({form}, ownProps) => ({
	...ownProps,
	takeStatust: 'values' in form.addEntityForm ? form.addEntityForm.values.deliveryAssets.statusTakeShipment : '0',
	returnStatus: 'values' in form.addEntityForm ? form.addEntityForm.values.deliveryAssets.statusReturnShipment : '0'
});

export default connect(mapStateToProps, null)(ServiceDeliveryFieldsAdditional);