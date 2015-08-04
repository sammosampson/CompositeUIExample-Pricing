import React from 'react';
import SchemesStore from './schemes-store';
import SchemesActions from './schemes-actions';
import SchemesList from './schemes-list.react';

export default class Schemes extends React.Component {
  constructor(props) {
    super(props);
    this.state = { schemes: SchemesStore.schemes };
    this.changeCallback = this._onChange.bind(this);
    SchemesStore.addChangeListener(this.changeCallback);
    SchemesActions.fetch(131, 167);
  }

  componentWillUnmount() {
    SchemesStore.removeChangeListener(this.changeCallback);
  }

  _onChange() {
    this.setState({ schemes: SchemesStore.schemes })
  }

  render() {
    return (
      <div>
        <SchemesList schemes={this.state.schemes}/>
      </div>
    );
  }
}
