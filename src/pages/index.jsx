import React from 'react';
import { Route, Redirect, Switch } from 'react-router';

import {
	HeaderContainer,
	SupportContainer,
	MasterTableContainer,
	ClientsContainer,
	AddresseesContainer,
	CouriersContainer
} from '../containers';

import ROUTES from './routes';

const Content = () => (
	<React.Fragment>
		<HeaderContainer />
		<Switch>
			<Route path={ROUTES.clients} component={ClientsContainer} />
			<Route path={ROUTES.addressees} component={AddresseesContainer} />
			<Route path={ROUTES.couriers} component={CouriersContainer} />
			<Route path={ROUTES.mainTable} component={MasterTableContainer} />
			<Route path={ROUTES.test} component={SupportContainer} />
			<Redirect to={ROUTES.mainTable} />
		</Switch>
	</React.Fragment>
);

export default Content;