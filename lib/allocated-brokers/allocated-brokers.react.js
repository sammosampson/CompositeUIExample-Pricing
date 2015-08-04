import React from 'react';
import Panel from 'react-components/panel.react';
import AllocatedBrokersStore from './allocated-brokers-store';
import AllocatedBrokersActions from './allocated-brokers-actions';
import List from 'react-components/lists/list.react';

export default class AllocatedBrokers extends React.Component {
  constructor(props) {
    super(props);
    this.state = { brokers: AllocatedBrokersStore.brokers };
    this.changeCallback = this._onChange.bind(this);
    AllocatedBrokersStore.addChangeListener(this.changeCallback);
    AllocatedBrokersActions.fetch(27);
  }

  componentWillUnmount() {
    AllocatedBrokersStore.removeChangeListener(this.changeCallback);
  }

  _onChange() {
    this.setState({ brokers: AllocatedBrokersStore.brokers })
  }

  render() {
    return (
      <Panel title="Brokers">
        <List items={this.state.brokers} getItemTitle={(broker) => broker.Name} getItemKey={(broker) => broker.Id} onItemSelected={this.props.onBrokerSelected}/>
      </Panel>
    );
  }
}
