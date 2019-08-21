import React, { Fragment, PureComponent } from 'react';
import LoadingBar from 'react-redux-loading-bar';

import ShortStatistic from '../shortStatistic';
import HeaderItem from './headerItem';
import './style.css';

class Header extends PureComponent {
	static defaultProps = {
		items: [],
		login: 'Unknown user'
	}

	renderList = (el,i) => {
		const key = `${el.name}_${i}`;
		return (
			<HeaderItem
				{ ...el }
				logout = { this.props.logout }
				key = { key }
			/>
		)
	}

	render() {
		const { login, menu, rollDownMenu, shortStatistic } = this.props;
		const shortLogin = login[0].toUpperCase();

		return (
			<Fragment>
				<LoadingBar className="loading" updateTime={100} />
				<header className='header'>
					<div className='login' title={ login }>
						{ shortLogin }
						<ul className="rollDownMenu">
							{ rollDownMenu.map(this.renderList) }
						</ul>
					</div>
					<ShortStatistic {...shortStatistic} />
					<ul className="menu">
						{ menu.map(this.renderList) }
					</ul>
				</header>
			</Fragment>
		);
	}
};

export default Header