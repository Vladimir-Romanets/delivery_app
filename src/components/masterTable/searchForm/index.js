import React, { PureComponent } from 'react';
import { reduxForm } from 'redux-form';
import searchFields from './searchFields';
import { IcoClose } from '../../icons';
import './style.css';

class SearchForm extends PureComponent {
	static defaultProps = {
		parentClass: '',
	};

	renderSearchFields = () => {
		const { fields } = this.props;

		return fields.map( field => 
			field in searchFields ?
				searchFields[field](field) : (<div className='table__cell' key={field} />)
		);
	}

	render(){
		const { parentClass, pristine, submitting, reset } = this.props;
		return(
			<form className={`form ${parentClass}`}>
				<div className="table__cell">
					<button
						className="svgContent"
						type="button"
						disabled={pristine || submitting}
						onClick={reset}>
						<IcoClose />
					</button>
				</div>
				{
					this.renderSearchFields()
				}
				<div className="table__cell" />
			</form>
		)
	}
};

export default reduxForm({
	form: ['text'],
	enableReinitialize: true
})( SearchForm );