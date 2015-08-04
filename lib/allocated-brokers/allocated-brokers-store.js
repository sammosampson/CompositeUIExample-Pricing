'use strict';

import FluxStore from 'react-components/flux-store';
import AppDispatcher from 'react-components/dispatcher';
import AllocatedBrokersConstants from './allocated-brokers-constants';

let brokers = [];

class AllocatedBrokersStore extends FluxStore {
	get brokers() {
		return brokers;
	}
}

let _AllocatedBrokersStore = new AllocatedBrokersStore();
export default _AllocatedBrokersStore;

AppDispatcher.register((payload) => {
	if(payload.action.type == AllocatedBrokersConstants.ALLOCATED_BROKERS_FETCHED) {
		brokers = payload.action.brokers;
		_AllocatedBrokersStore.emitChange();
	}
});
