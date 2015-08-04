'use strict';

import FluxStore from 'react-components/flux-store';
import AppDispatcher from 'react-components/dispatcher';
import SchemesConstants from './schemes-constants';

let schemes = [];

class SchemesStore extends FluxStore {
	get schemes() {
		return schemes;
	}
}

let _SchemesStore = new SchemesStore();
export default _SchemesStore;

AppDispatcher.register((payload) => {
	if(payload.action.type == SchemesConstants.FETCHING) {
		schemes = payload.action.schemes;
		_SchemesStore.emitChange();
	}
});
