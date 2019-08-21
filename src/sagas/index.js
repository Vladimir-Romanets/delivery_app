import { fork } from 'redux-saga/effects';
import auth from './auth';
import masterTable from './masterTable';
import header from './header';
import clients from './clients';
import addressees from './addressees';
import couriers from './couriers';
import masterTableEntity from './masterTableEntity';
import statistic from './statistic';


export default function* sagas() {
	yield fork( auth );
	yield fork( masterTable );
	yield fork( header );
	yield fork( clients );
	yield fork( addressees );
	yield fork( couriers );
	yield fork( masterTableEntity );
	yield fork( statistic );
};