import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Field, FormSection } from 'redux-form';
import AutoComplete from '../autoComplete';

class ReturnFieldsGroup extends PureComponent{

	static propTypes = {
		name: PropTypes.string.isRequired,
	}

	render(){
		const { name } = this.props;

		return(
			<FormSection name={name}>
				<Field
					component='input'
					type='hidden'
					name='fio'
				/>
				<Field
					component='input'
					type='hidden'
					name='id'
				/>
				<AutoComplete entity={`deliveryAssets.${name}`} linkField="fio"	/>
			</FormSection>
		)
	}
};

export default ReturnFieldsGroup;