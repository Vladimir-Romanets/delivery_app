import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { loadingBarReducer } from 'react-redux-loading-bar';

import { form } from './form';
import authorization from './authorization';
import masterTable from './masterTable';
import header from './header';
import addressees from './addressees';
import couriers from './couriers';
import clients from './clients';
import notifiers from './notifiers';
import autoSuggestion from './autoSuggestion';
import pagination from './pagination';
import statistic from './statistic';

export default combineReducers({
	router: routerReducer,
    form,
    authorization,
    masterTable,
    header,
    addressees,
    couriers,
    clients,
    notifiers,
    autoSuggestion,
    pagination,
    loadingBar: loadingBarReducer,
    statistic,
});