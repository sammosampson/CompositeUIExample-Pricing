import React from 'react';
import AllocatedBrokers from './allocated-brokers/allocated-brokers.react';
import Agencies from './agencies/agencies.react';
import AgenciesActions from './agencies/agencies-actions';

export default class TestPage extends React.Component {
  render() {
    return (
      <div>
        <AllocatedBrokers onBrokerSelected={(brokerId) => AgenciesActions.fetch(27, brokerId)}></AllocatedBrokers>
        <Agencies></Agencies>
      </div>);
  }
}
