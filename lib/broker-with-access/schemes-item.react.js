import React from 'react';

export default class SchemesItem extends React.Component {
  render() {
    return(
      <div key={this.props.key}>
        <div className="noselect">{this.props.scheme.Name} {this.props.scheme.DefaultCommissionRate}%</div>
      </div>
      );
  }
}
