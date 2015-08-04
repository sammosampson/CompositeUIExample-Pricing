import React from 'react';
import SchemesItem from './schemes-item.react';

export default class SchemesList extends React.Component {
  render() {
    return (
      <div className="clearfix"> {
        this.props.schemes.map((scheme, index) => {
          return <SchemesItem scheme={scheme} key={index}/>;
        })}
      </div>);
  }
}
