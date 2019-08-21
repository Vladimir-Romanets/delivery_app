import React, { PureComponent } from 'react';

class TableHeader extends PureComponent{
	static defaultName = 'TableHeader'

	static defaultProps = {
		checkAllItems: false,
	}

	handlerChange = ({ target }) => {
		this.props.mtSelectAllItem(target.checked);
	}

	renderHeader = () => {
		const { tableHeader, fields, setFilter, filterMethod, filterField } = this.props;

		return tableHeader ? fields.map((el, i) => {
			const field = tableHeader[el] || '';
			const cellClass = `table__cell ${el === filterField ? filterMethod : ''}`;

			return (
				<div
					className={cellClass}
					key={`${i}_${el}`}
					onClick={() => setFilter(el)}>
					{field}
				</div>
			)
		}) : null
	}

	render(){
		const { checkAllItems, setFilter, filterMethod, filterField } = this.props;
		const cellClass = `table__cell ${'delivery_id' === filterField ? filterMethod : ''}`;

		return (
			<div className='table__row table__header'>
				<div className={cellClass} onClick={() => setFilter('delivery_id')}>#</div>
				{ this.renderHeader() }
				<div className='table__cell'>
					<input
						type="checkbox"
						name="selectAll"
						checked={checkAllItems}
						onChange={this.handlerChange}
					/>
				</div>
			</div>
		);
	}
};

export default TableHeader;
