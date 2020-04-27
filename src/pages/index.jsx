import React from 'react'
import { Route, Redirect, Switch } from 'react-router'

import ClientsContainer from './clients'
import CouriersContainer from './couriers'
import AddresseesContainer from './addressees'
import ROUTES from './routes'
import {
  HeaderContainer,
  SupportContainer,
  MasterTableContainer,
} from '../containers'

const Content = () => (
  <>
    <HeaderContainer />
    <Switch>
      <Route path={ROUTES.clients} component={ClientsContainer} />
      <Route path={ROUTES.addressees} component={AddresseesContainer} />
      <Route path={ROUTES.couriers} component={CouriersContainer} />
      <Route path={ROUTES.mainTable} component={MasterTableContainer} />
      <Route path={ROUTES.test} component={SupportContainer} />
      <Redirect to={ROUTES.mainTable} />
    </Switch>
  </>
)

export default Content