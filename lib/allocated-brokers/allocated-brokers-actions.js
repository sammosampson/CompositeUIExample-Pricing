import AllocatedBrokersSlave from './allocated-brokers-slave';
import AppDispatcher from 'react-components/dispatcher';
import AllocatedBrokersConstants from './allocated-brokers-constants';

export default {
    fetch: (insurerId) => {
        AllocatedBrokersSlave.fetch(insurerId).then((brokers) => {
        AppDispatcher.handleViewAction({
            type: AllocatedBrokersConstants.ALLOCATED_BROKERS_FETCHED,
            brokers: brokers
        });
      });
    }
}
