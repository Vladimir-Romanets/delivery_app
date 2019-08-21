import React from 'react';
import { NavLink } from 'react-router-dom';
import { PATH } from '../../const/config';

const HeaderItem = ({ name, description = '', ...rest }) => {
	const className = `menu__item --${name || ''}`;
	const link = name === 'logout' ? '' : name;

	return (
		<li className={ className }>

			<NavLink
				to={ `${PATH}${link}` }
				activeClassName='selected'
				exact
				onClick={ rest[name] || null } >
				{ description }
			</NavLink>

		</li>
	);
};

export default HeaderItem;