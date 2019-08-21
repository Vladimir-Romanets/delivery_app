import React, { PureComponent, Fragment } from 'react';

export class SelectService extends PureComponent {
	static defaultProps = {
		defaultValue: 0,
		changeHandler: null,
		services: []
	};

	otions = () => this.props.services.map(
		({ id, service_type_name }) => (
		<option key={id.toString()} value={id}>
			{service_type_name}
		</option>
		)
	);

	render() {
		const { defaultValue, changeHandler, services } = this.props;

		return (
			<Fragment>
				<label htmlFor="services">Вид услуги:&nbsp;</label>
				<select id="services" value={defaultValue} onChange={changeHandler}>
				{services ? this.otions() : null}
				</select>
			</Fragment>
		)
	}
}