import React from 'react';
import {
	SupportContainer,
	MasterTableContainer,
	ClientsContainer,
	AddresseesContainer,
	CouriersContainer } from './containers';
import { Route, Redirect, Switch } from 'react-router-dom';
import { PATH } from './const/config';

const Routes = () => (
	<Switch>
		<Route path={`${PATH}clients`} component={ ClientsContainer } />
		<Route path={`${PATH}addressees`} component={ AddresseesContainer } />
		<Route path={`${PATH}couriers`} component={ CouriersContainer } />
		<Route path={`${PATH}table`} component={ MasterTableContainer } />
		<Route path={`${PATH}test`} component={ SupportContainer } />
		<Route path={PATH} render={ () => <Redirect to={`${PATH}table`} /> } />
	</Switch>
);

export default Routes;