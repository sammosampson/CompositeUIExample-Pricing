import React from 'react';
import Panel from 'react-components/panel.react';
import AgenciesStore from './agencies-store';
import List from 'react-components/lists/list.react';

export default class Agencies extends React.Component {
  constructor(props) {
    super(props);
    this.state = { agencies: AgenciesStore.agencies };
    this.changeCallback = this._onChange.bind(this);
    AgenciesStore.addChangeListener(this.changeCallback);
  }

  componentWillUnmount() {
    AgenciesStore.removeChangeListener(this.changeCallback);
  }

  _onChange() {
    this.setState({ agencies: AgenciesStore.agencies })
  }

  render() {
    return (
      <Panel title="Agencies">
        <List
          items={this.state.agencies}
          getItemTitle={(agency) => agency.DictionaryName + ' ' + agency.Reference}
          getItemKey={(agency) => agency.Id}
          onItemSelected={this.props.onAgencySelected}/>
      </Panel>
    );
  }
}
