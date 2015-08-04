import SchemesSlave from './schemes-slave';
import AppDispatcher from 'react-components/dispatcher';
import SchemesConstants from './schemes-constants';

export default {
    fetch: (insurerId, brokerId) => {
        SchemesSlave.fetch(insurerId, brokerId).then((schemes) => {
        AppDispatcher.handleViewAction({
            type: SchemesConstants.FETCHING,
            schemes: schemes
        });
      });
    }
}
