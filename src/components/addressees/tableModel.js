import React, {PureComponent} from 'react';

export class TableModel extends PureComponent {
	static defaultProps = {
		id: null,
		number: '',
		contact_name: '',
		fio: '',
		address: '',
		phone: '',
		email: '',
		comments: '',
		dubleClickHandler: null
	}
	
	render(){
		const {
			number,
			contact_name,
			fio,
			address,
			phone,
			email,
			comments,
			dubleClickHandler
		} = this.props;

		return(
			<div className='table__row' title={ comments } onDoubleClick={ dubleClickHandler } >
				<div className='table__cell'>{ number }</div>
				<div className='table__cell'>{ contact_name } </div>
				<div className='table__cell'>{ fio }</div>
				<div className='table__cell'>{ address }</div>
				<div className='table__cell'>{ phone }</div>
				<div className='table__cell'>{ email }</div>
			</div>
		);
	}
};