'use strict';

import FluxStore from 'react-components/flux-store';
import AppDispatcher from 'react-components/dispatcher';
import AgenciesConstants from './agencies-constants';
import AllocatedBrokersConstants from '../allocated-brokers/allocated-brokers-constants';

let agencies = [];

class AgenciesStore extends FluxStore {
	get agencies() {
		return agencies;
	}
}

let _AgenciesStore = new AgenciesStore();
export default _AgenciesStore;

AppDispatcher.register((payload) => {
	if(payload.action.type == AgenciesConstants.AGENCIES_FETCHED) {
		agencies = payload.action.agencies;
		_AgenciesStore.emitChange();
	}
});
