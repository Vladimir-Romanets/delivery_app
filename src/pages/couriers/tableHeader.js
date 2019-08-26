import React, {PureComponent} from 'react';

export class TableHeader extends PureComponent {

	renderList = () => this.props.title.map( (el, i) => (
		<div className='table__cell' key={ i }>
			{ el }
		</div>
	))

	render() {
		return (
			<div className='table__row table__header'>
				{ this.renderList() }
			</div>
		);
	}
};

TableHeader.defaultProps = {
	title: ['#', 'ФИО', 'Авто', 'Телефон', 'Примечание']
};