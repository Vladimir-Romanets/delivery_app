import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
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

const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
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

export default createRootReducer