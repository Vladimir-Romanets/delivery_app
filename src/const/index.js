import * as auth from './auth';
import * as header from './header';
import * as masterTable from './masterTable';
import * as clients from './clients';
import * as addressees from './addressees';
import * as couriers from './couriers';
import * as notifiers from './notifiers';
import * as MTEntity from './masterTableEntity';
import * as form from './form';
import * as autoSuggestion from './autoSuggestion';
import * as pagination from './pagination';
import * as statistic from './statistic';


const types = {
	...form,
	...auth,
	...header,
	...clients,
	...masterTable,
	...addressees,
	...couriers,
	...notifiers,
	...MTEntity,
	...autoSuggestion,
	...pagination,
	...statistic
};

export default types;
