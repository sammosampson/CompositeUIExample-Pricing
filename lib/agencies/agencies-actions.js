import AgenciesSlave from './agencies-slave';
import AppDispatcher from 'react-components/dispatcher';
import AgenciesConstants from './agencies-constants';

export default {
    fetch: (insurerId, brokerid) => {
        AgenciesSlave.fetch(insurerId, brokerid).then((agencies) => {
        AppDispatcher.handleViewAction({
            type: AgenciesConstants.AGENCIES_FETCHED,
            agencies: agencies
        });
      });
    }
}
